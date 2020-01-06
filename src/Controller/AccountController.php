<?php


namespace App\Controller;


use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/account")
 */
final class AccountController extends AbstractController
{
    /** @var SerializerInterface */
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @Route("/change-password", name="changePassword")
     */
    public function changePasswordAction(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();
        $userClone = clone $user;
        $userClone->setPlainPassword($request->request->get('password'));
        $this->getDoctrine()->getManager()->merge($userClone);
        $this->getDoctrine()->getManager()->flush();

        $data = $this->serializer->serialize($userClone, JsonEncoder::FORMAT, ['groups' => ['default']]);

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    /**
     * @Route("/modify-account", name="modifyAccount")
     */
    public function modifyAccountAction(Request $request): JsonResponse
    {
        /** @var User $user */
        $userEntity = $this->getUser();
        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy([
            'email' => $request->request->get('username')
        ]);


        if (!empty($user) && $user->getId() != $userEntity->getId()) {
            return new JsonResponse(json_encode(
                ['error' => 'You cannot use this email']
            ), Response::HTTP_BAD_REQUEST, [], true);
        }

        $userEntity->setEmail($request->request->get('username'));
        $userEntity->setFirstname($request->request->get('firstname'));
        $userEntity->setLastname($request->request->get('lastname'));
        $this->getDoctrine()->getManager()->merge($userEntity);
        $this->getDoctrine()->getManager()->flush();

        $userClone = clone $userEntity;
        $userClone->setPassword('');
        $data = $this->serializer->serialize($userClone, JsonEncoder::FORMAT, ['groups' => ['default']]);

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }
}
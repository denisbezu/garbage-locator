<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use RuntimeException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\VarDumper\VarDumper;

/**
 * @Route("/api")
 */
final class AppSecurityController extends AbstractController
{
    /** @var SerializerInterface */
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @Route("/security/login", name="login")
     */
    public function loginAction(): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();
        $userClone = clone $user;
        $userClone->setPassword('');
        $data = $this->serializer->serialize($userClone, JsonEncoder::FORMAT);

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    /**
     * @Route("/security/register", name="register")
     * @throws \JsonException
     */
    public function registerAction(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy([
            'email' => $request->request->get('username')
        ]);

        if (!empty($user)) {
            return new JsonResponse(json_encode(
                ['error' => 'User is already exists']
            ), Response::HTTP_BAD_REQUEST, [], true);
        }

        $userEntity = new User();
        $userEntity->setEmail($request->request->get('username'));
        $userEntity->setPlainPassword($request->request->get('password'));
        $userEntity->setFirstname($request->request->get('firstname'));
        $userEntity->setLastname($request->request->get('lastname'));
        $this->getDoctrine()->getManager()->persist($userEntity);
        $this->getDoctrine()->getManager()->flush();

        $userClone = clone $userEntity;
        $userClone->setPassword('');
        $data = $this->serializer->serialize($userClone, JsonEncoder::FORMAT);

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    /**
     * @throws RuntimeException
     *
     * @Route("/security/logout", name="logout")
     */
    public function logoutAction(): void
    {
        throw new RuntimeException('This should not be reached!');
    }
}
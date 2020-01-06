<?php


namespace App\Controller;


use App\Entity\Comment;
use App\Entity\Event;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;


/**
 * @Route("/api/comments")
 */
class CommentsController extends AbstractController
{
    /** @var SerializerInterface */
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @Route("/add", name="addComment")
     */
    public function addCommentAction(Request $request): JsonResponse
    {
        $comment = new Comment();
        $idEvent = (int)$request->request->get('eventId');
        $text = $request->request->get('text');
        /** @var Event|null $event */
        $event = $this->getDoctrine()->getManager()->find(Event::class, $idEvent);
        /** @var User $user */
        $user = $this->getUser();
        $comment->setEvent($event)
            ->setParent(null)
            ->setScore(0)
            ->setUser($user)
            ->setComment($text);

        $this->getDoctrine()->getManager()->persist($comment);
        $this->getDoctrine()->getManager()->flush();

        $data = $this->serializer->serialize($comment, JsonEncoder::FORMAT, ['groups' => ['default']]);

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    /**
     * @Route("/score", name="changeScore")
     */
    public function changeScoreAction(Request $request): JsonResponse
    {
        $idComment = (int)$request->request->get('idComment');
        $sign = $request->request->get('sign');
        /** @var Comment|null $comment */
        $comment = $this->getDoctrine()->getManager()->find(Comment::class, $idComment);
        if ($sign == '+') {
            $comment->setScore($comment->getScore() + 1);
        } else {
            $comment->setScore($comment->getScore() - 1);
        }

        $this->getDoctrine()->getManager()->merge($comment);
        $this->getDoctrine()->getManager()->flush();

        $data = $this->serializer->serialize($comment, JsonEncoder::FORMAT, ['groups' => ['default']]);

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }
}
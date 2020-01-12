<?php

namespace App\Controller;

use App\Entity\Comment;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminComments extends AbstractController
{
    public function __construct()
    {
    }

    /**
     *
     * @Route("/admin/comments", name="admin_comments")
     */
    public function indexAction(): Response
    {
        $comments = $this->getDoctrine()
            ->getRepository(Comment::class)
            ->findAll();

        return $this->render('admin/comments.html.twig', ['comments' => $comments]);
    }

    /**
     *
     * @Route("/admin/comment/{id}", name="admin_comment")
     */
    public function showComment(int $id): Response
    {
        $comment = $this->getDoctrine()
            ->getRepository(Comment::class)
            ->find($id);

        return $this->render('admin/comment.html.twig', ['comment' => $comment]);
    }

    /**
     *
     * @Route("/admin/comment/{id}/edit", name="admin_comment_edit")
     */
    public function editEvent(Request $request, int $id): Response
    {
        $manager = $this->getDoctrine()->getManager();
        $comment = $manager->getRepository(Comment::class)->find($id);
        $comment->setComment($request->get('comment'));

        $manager->flush();

        return $this->render('admin/comment.html.twig', ['comment' => $comment]);
    }
}

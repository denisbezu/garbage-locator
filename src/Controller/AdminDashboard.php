<?php

namespace App\Controller;

use App\Entity\User;
use JsonException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

class AdminDashboard extends AbstractController
{
    public function __construct()
    {
    }

    /**
     * @throws JsonException
     *
     * @Route("/admin", name="admin")
     */
    public function indexAction(): Response
    {
        return $this->render('admin/dashboard.html.twig');
    }
}

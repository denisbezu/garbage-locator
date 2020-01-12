<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Marker;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminEvents extends AbstractController
{
    public function __construct()
    {
    }

    /**
     *
     * @Route("/admin/events", name="admin_events")
     */
    public function indexAction(): Response
    {
        $events = $this->getDoctrine()
            ->getRepository(Event::class)
            ->findAll();

        return $this->render('admin/events.html.twig', ['events' => $events]);
    }

    /**
     *
     * @Route("/admin/event/{id}", name="admin_event")
     */
    public function showEvent(int $id): Response
    {
        $event = $this->getDoctrine()
            ->getRepository(Event::class)
            ->find($id);

        return $this->render('admin/event.html.twig', ['event' => $event]);
    }

    /**
     *
     * @Route("/admin/event/{id}/edit", name="admin_event_edit")
     */
    public function editEvent(Request $request, int $id): Response
    {
        $event = $this->getDoctrine()
            ->getRepository(Event::class)
            ->find($id);

        return $this->render('admin/event.html.twig', ['event' => $event]);
    }
}

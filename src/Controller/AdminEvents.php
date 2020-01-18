<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Image;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
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

        $eventsApprovementCount = $this->getDoctrine()
            ->getRepository(Event::class)
            ->getApprovementCount();

        return $this->render('admin/events.html.twig', ['events' => $events, 'eventsApprovementCount' => $eventsApprovementCount]);
    }

    /**
     *
     * @Route("/admin/event/{id}", name="admin_event", requirements={"id": "\d+"})
     */
    public function showEvent(int $id): Response
    {
        $event = $this->getDoctrine()
            ->getRepository(Event::class)
            ->find($id);

        $eventApprovementCount = $this->getDoctrine()
            ->getRepository(Event::class)
            ->getApprovementCountById($id);

        return $this->render('admin/event.html.twig', ['event' => $event, 'eventApprovementCount' => $eventApprovementCount]);
    }

    /**
     *
     * @Route("/admin/event/{id}/edit", name="admin_event_edit")
     */
    public function editEvent(Request $request, int $id): Response
    {
        $manager = $this->getDoctrine()->getManager();
        $event = $manager->getRepository(Event::class)->find($id);

        $event->setLevel((int)$request->get('level'));
        $event->setType($request->get('type'));
        $event->setDescription($request->get('description'));

        if ($request->get('status')) {
            $event->setStatus(1);
        } else {
            $event->setStatus(0);
        }

        $manager->flush();

        return $this->redirectToRoute('admin_event', ['id' => $id]);
    }

    /**
     *
     * @Route("/admin/event/deleteImage", name="admin_event_delete_image")
     */
    public function deleteImage(Request $request): JsonResponse
    {
        try {
            $idImage = (int)$request->get('idImage');
            $manager = $this->getDoctrine()->getManager();
            $image = $manager->getRepository(Image::class)->find($idImage);
            $manager->remove($image);
            $manager->flush();

            $response = array(
                'success' => true,
                'errorMessage' => ''
            );
        } catch (\Exception $e) {
            $response = array(
                'success' => false,
                'errorMessage' => $e->getMessage()
            );
        }

        return new JsonResponse($response, Response::HTTP_OK, []);
    }
}

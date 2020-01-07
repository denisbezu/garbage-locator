<?php


namespace App\Controller;


use App\Entity\Event;
use App\Entity\EventResult;
use App\Entity\Image;
use App\Entity\Marker;
use App\Entity\User;
use App\Entity\UserEventResult;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Constraints\Json;

/**
 * @Route("/api/events")
 */
final class EventController extends AbstractController
{
    /** @var SerializerInterface */
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @Route("/add", name="addEvent")
     */
    public function addEventAction(Request $request): JsonResponse
    {
        /** @var User $user */
        $latitude = (float)$request->request->get('position')['lat'];
        $longitude = (float)$request->request->get('position')['lng'];
        $level = (int)$request->request->get('level');
        $type = $request->request->get('type');
        $description = $request->request->get('description');
        $images = $request->request->get('images');

        $imgObjects = [];
        $user = $this->getUser();
        $manager = $this->getDoctrine()->getManager();

        $marker = $manager->getRepository(Marker::class)->findOneByLngLat($longitude, $latitude);
        if (empty($marker)) {
            $marker = new Marker();
            $marker->setLatitude($latitude);
            $marker->setLongitude($longitude);
            $manager->persist($marker);
        }

        if (!empty($images)) {
            foreach ($images as $image) {
                $imageObj = new Image();
                $imageObj->setName('test'); //@TODO
                $imageObj->setContent($image);
                $manager->persist($imageObj);
                $imgObjects[] = $imageObj;
            }
        }

        $event = new Event();
        $event->setDescription($description);
        $event->setCreator($user);
        $event->setLevel($level);
        $event->setStatus(Event::STATUS_OPENED);
        $event->setMarker($marker);
        $event->setType($type);
        foreach ($imgObjects as $imgObject) {
            $event->addImage($imgObject);
        }

        $manager->persist($event);

        $eventResult = new EventResult();
        $eventResult->setEvent($event)
            ->setAdminApproved(false);
        $manager->persist($eventResult);

        $manager->flush();

        //@TODO
        return new JsonResponse('', Response::HTTP_OK, [], true);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @Route("/getByCoordinates", name="getEventsByCoordinated")
     */
    public function getMarkerEvents(Request $request): JsonResponse
    {
        $latitude = (float)$request->request->get('latitude');
        $longitude = (float)$request->request->get('longitude');

        $manager = $this->getDoctrine()->getManager();

        /**
         * @var Marker $marker
         */
        $marker = $manager->getRepository(Marker::class)->findOneByLngLat($longitude, $latitude);

        $events = empty($marker) ? array() : $marker->getEvents();
        $data = $this->serializer->serialize($events, JsonEncoder::FORMAT, ['groups' => ['default']]);

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @Route("/toggleResult", name="toggleResult")
     */
    public function toggleEventResult(Request $request): JsonResponse
    {
        $eventId = (int)$request->request->get('eventId');
        $manager = $this->getDoctrine()->getManager();

        /** @var Event $event */
        $event = $manager->getRepository(Event::class)->find($eventId);
        $eventResult = $event->getEventResult();

        $userEventResultValues = $eventResult->getUserEventResults();
        /** @var UserEventResult $userEventResultValue */
        foreach ($userEventResultValues as $userEventResultValue) {
            if ($userEventResultValue->getUser()->getId() == $this->getUser()->getId()
                && $userEventResultValue->getEventResult()->getId() == $eventResult->getId()) {
                $userEventResult = $userEventResultValue;
                break;
            }
        }

        if (empty($userEventResult)) {
            $userEventResult = new UserEventResult();
            $userEventResult->setUser($this->getUser());
            $userEventResult->setEventResult($eventResult);
            $manager->persist($userEventResult);
        } else {
            $manager->remove($userEventResult);
        }

        $manager->flush();
        $manager->refresh($eventResult);
        $manager->refresh($event);

        $data = $this->serializer->serialize($event, JsonEncoder::FORMAT, ['groups' => ['default']]);

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }
}
<?php


namespace App\Controller;


use App\Entity\Event;
use App\Entity\Image;
use App\Entity\Marker;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

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
        $manager->flush();

        //@TODO
        return new JsonResponse('', Response::HTTP_OK, [], true);
    }
}
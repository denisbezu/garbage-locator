<?php


namespace App\Controller;

use App\Entity\Marker;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/markers")
 */
final class MarkerController extends AbstractController
{
    /** @var SerializerInterface */
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @Route("/getAll", name="getMarkers")
     */
    public function addEventAction(Request $request): JsonResponse
    {
        $markers = $this->getDoctrine()->getManager()->getRepository(Marker::class)->findAll();
        $data = $this->serializer->serialize($markers, JsonEncoder::FORMAT, ['groups' => ['default']]);

        return new JsonResponse($data, Response::HTTP_OK, [], true);
    }
}
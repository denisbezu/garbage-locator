<?php

namespace App\Repository;

use App\Entity\Marker;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Marker|null find($id, $lockMode = null, $lockVersion = null)
 * @method Marker|null findOneBy(array $criteria, array $orderBy = null)
 * @method Marker[]    findAll()
 * @method Marker[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MarkerRepository extends ServiceEntityRepository
{
    const MARKER_PRECISION = 0.0001;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Marker::class);
    }

    /**
     * @param $longitude
     * @param $latitude
     * @return Marker|int|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findOneByLngLat($longitude, $latitude)
    {
        $minLongitude = $longitude - self::MARKER_PRECISION;
        $maxLongitude = $longitude + self::MARKER_PRECISION;
        $minLatitude = $latitude - self::MARKER_PRECISION;
        $maxLatitude = $latitude + self::MARKER_PRECISION;

        return $this->createQueryBuilder('m')
            ->andWhere('m.longitude <= :maxLongitude')
            ->andWhere('m.longitude >= :minLongitude')
            ->andWhere('m.latitude <= :maxLatitude')
            ->andWhere('m.latitude >= :minLatitude')
            ->setParameter('minLongitude', $minLongitude)
            ->setParameter('maxLongitude', $maxLongitude)
            ->setParameter('minLatitude', $minLatitude)
            ->setParameter('maxLatitude', $maxLatitude)
            ->getQuery()->getOneOrNullResult();
    }
}

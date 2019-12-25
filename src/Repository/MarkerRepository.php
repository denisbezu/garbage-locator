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
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Marker::class);
    }

    /**
     * @param $longitude
     * @param $latitude
     * @return Marker|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findOneByLngLat($longitude, $latitude): ?Marker
    {
        $minLongitude = $longitude - 0.001;
        $maxLongitude = $longitude + 0.001;
        $minLatitude = $latitude - 0.001;
        $maxLatitude = $latitude + 0.001;

        return $this->createQueryBuilder('m')
            ->andWhere('m.longitude <= :maxLongitude')
            ->andWhere('m.longitude >= :minLongitude')
            ->andWhere('m.latitude <= :maxLatitude')
            ->andWhere('m.latitude >= :minLatitude')
            ->setParameter('minLongitude', $minLongitude)
            ->setParameter('maxLongitude', $maxLongitude)
            ->setParameter('minLatitude', $minLatitude)
            ->setParameter('maxLatitude', $maxLatitude)
            ->getQuery()
            ->getOneOrNullResult();
    }
}

<?php

namespace App\Repository;

use App\Entity\UserEventResult;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\ResultSetMapping;

/**
 * @method UserEventResult|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserEventResult|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserEventResult[]    findAll()
 * @method UserEventResult[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserEventResultRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserEventResult::class);
    }
}

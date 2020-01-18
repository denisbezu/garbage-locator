<?php

namespace App\Repository;

use App\Entity\Event;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Event::class);
    }

    public function getApprovementCount()
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
              SELECT er.event_id, Count(*) as `count`
              FROM `event_result` as er 
              LEFT JOIN user_event_result AS uer ON uer.event_result_id = er.id 
              WHERE uer.id IS NOT NULL 
              GROUP BY er.event_id';

        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetchAll();
        $eventsApprovementCount = [];

        if (empty($res) == false) {
            foreach ($res as $row)
            {
                $eventsApprovementCount[$row['event_id']] = (int)$row['count'];
            }
        }

        return $eventsApprovementCount;
    }

    public function getApprovementCountById(int $idEvent): int
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
              SELECT Count(*) AS `count`
              FROM `event_result` AS er 
              LEFT JOIN user_event_result AS uer ON uer.event_result_id = er.id 
              WHERE uer.id IS NOT NULL AND er.event_id = :idEvent
              GROUP BY er.event_id';

        $stmt = $conn->prepare($sql);
        $stmt->execute(['idEvent' => $idEvent]);
        $res = $stmt->fetch();

        return (int)$res['count'];
    }

    // /**
    //  * @return Event[] Returns an array of Event objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */
}

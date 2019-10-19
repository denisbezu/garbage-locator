<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    public const DEFAULT_USER_EMAIL = 'denys.bezi@gmail.com';

    public const DEFAULT_USER_PASSWORD = 'bar';

    public function load(ObjectManager $manager): void
    {
        $userEntity = new User();
        $userEntity->setEmail(self::DEFAULT_USER_EMAIL);
        $userEntity->setPlainPassword(self::DEFAULT_USER_PASSWORD);
        $userEntity->setRoles(['ROLE_FOO']);
        $manager->persist($userEntity);
        $manager->flush();
    }
}

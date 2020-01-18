<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserEventResultRepository")
 */
class UserEventResult
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", fetch="EAGER")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\EventResult", inversedBy="userEventResults", fetch="EAGER")
     */
    private $eventResult;

    /**
     * @Groups({"default"})
     */
    private $userId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getEventResult(): ?EventResult
    {
        return $this->eventResult;
    }

    public function setEventResult(?EventResult $eventResult): self
    {
        $this->eventResult = $eventResult;

        return $this;
    }

    public function getUserId(): ?int
    {
        if (is_null($this->user)) {
            return null;
        }

        return $this->user->getId();
    }
}

<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EventResultRepository")
 */
class EventResult
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Event", inversedBy="eventResult", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $event;

    /**
     * @ORM\Column(type="integer", options={"default" : 5})
     * @Groups({"default"})
     */
    private $nb_to_approve = 5;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"default"})
     */
    private $admin_approved;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\UserEventResult", mappedBy="eventResult")
     * @Groups({"default"})
     */
    private $userEventResults;

    public function __construct()
    {
        $this->userEventResults = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEvent(): ?Event
    {
        return $this->event;
    }

    public function setEvent(Event $event): self
    {
        $this->event = $event;

        return $this;
    }

    public function getNbToApprove(): ?int
    {
        return $this->nb_to_approve;
    }

    public function setNbToApprove(int $nb_to_approve): self
    {
        $this->nb_to_approve = $nb_to_approve;

        return $this;
    }

    public function getAdminApproved(): ?bool
    {
        return $this->admin_approved;
    }

    public function setAdminApproved(bool $admin_approved): self
    {
        $this->admin_approved = $admin_approved;

        return $this;
    }

    /**
     * @return Collection|UserEventResult[]
     */
    public function getUserEventResults(): Collection
    {
        return $this->userEventResults;
    }

    public function addUserEventResult(UserEventResult $userEventResult): self
    {
        if (!$this->userEventResults->contains($userEventResult)) {
            $this->userEventResults[] = $userEventResult;
            $userEventResult->setEventResult($this);
        }

        return $this;
    }

    public function removeUserEventResult(UserEventResult $userEventResult): self
    {
        if ($this->userEventResults->contains($userEventResult)) {
            $this->userEventResults->removeElement($userEventResult);
            // set the owning side to null (unless already changed)
            if ($userEventResult->getEventResult() === $this) {
                $userEventResult->setEventResult(null);
            }
        }

        return $this;
    }
}

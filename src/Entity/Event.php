<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EventRepository")
 */
class Event
{

    const STATUS_OPENED = 0;
    const STATUS_CLOSED = 1;


    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"default"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"default"})
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Marker", inversedBy="events", fetch="EAGER")
     */
    private $marker;

    /**
     * @ORM\Column(type="text")
     * @Groups({"default"})
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"default"})
     */
    private $level;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="events", fetch="EAGER")
     */
    private $creator;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"default"})
     */
    private $status;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Image", inversedBy="events", fetch="EAGER")
     * @Groups({"default"})
     */
    private $images;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="event", fetch="EAGER")
     * @Groups({"default"})
     */
    private $comments;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\EventResult", mappedBy="event", cascade={"persist", "remove"}, fetch="EAGER")
     * @Groups({"default"})
     */
    private $eventResult;

    /**
     * @Groups({"default"})
     */
    private $creator_id;

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->comments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getMarker(): ?Marker
    {
        return $this->marker;
    }

    public function setMarker(?Marker $marker): self
    {
        $this->marker = $marker;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getLevel(): ?int
    {
        return $this->level;
    }

    public function setLevel(int $level): self
    {
        $this->level = $level;

        return $this;
    }

    public function getCreator(): ?User
    {
        return $this->creator;
    }

    public function setCreator(?User $creator): self
    {
        $this->creator = $creator;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->contains($image)) {
            $this->images->removeElement($image);
        }

        return $this;
    }

    /**
     * @return Collection|Comment[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setEvent($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getEvent() === $this) {
                $comment->setEvent(null);
            }
        }

        return $this;
    }

    public function getCreatorId(): ?int
    {
        if ($this->creator != null) {
            return $this->creator->getId();
        }

        return null;
    }

    public function getEventResult(): ?EventResult
    {
        return $this->eventResult;
    }

    public function setEventResult(EventResult $eventResult): self
    {
        $this->eventResult = $eventResult;

        // set the owning side of the relation if necessary
        if ($this !== $eventResult->getEvent()) {
            $eventResult->setEvent($this);
        }

        return $this;
    }
}

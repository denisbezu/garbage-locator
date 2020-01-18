<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class AdminCustomers extends AbstractController
{
    public function __construct()
    {

    }

    /**
     *
     * @Route("/admin/customers", name="admin_customers")
     */
    public function indexAction(): Response
    {
        $customers = $this->getDoctrine()
            ->getRepository(User::class)
            ->findAll();

        return $this->render('admin/customers.html.twig', [
            'customers' => $customers
        ]);
    }

    /**
     *
     * @Route("/admin/customer/{id}", name="admin_customer")
     */
    public function showCustomer(int $id): Response
    {
        $customer = $this->getDoctrine()
            ->getRepository(User::class)
            ->find($id);

        return $this->render('admin/customer.html.twig', [
            'customer' => $customer
        ]);
    }

    /**
     *
     * @Route("/admin/customer/{id}/edit", name="admin_customer_edit")
     */
    public function editCustomer(Request $request, int $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $customer = $entityManager->getRepository(User::class)->find($id);

        $customer->setFirstname($request->get('firstname'));
        $customer->setLastname($request->get('lastname'));
        $customer->setEmail($request->get('email'));

        if ($pswd = $request->get('password')) {
            $customer->setPlainPassword($pswd);
        }

        if ($request->get('isAdmin')) {
            $customer->setRoles(['ROLE_ADMIN']);
        } else {
            $customer->setRoles([]);
        }

        $entityManager->flush();

        return $this->redirectToRoute('admin_customer', ['id' => $id]);
    }
}

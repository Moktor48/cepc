import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient;

export default async function GET(request: NextRequest, 
    { params }: { params: {id: string } }) {
        const id = params.id
const getFullContact = await prisma.contact.findUnique({
    where: {
      id: parseInt(id, 10)
    },
    include: {
      phone: true, // All posts where authorId == 20
      email: true,
      junction: true,
      coalition: true //Coalition has no direct-connect, can we join through the junction?

    },
  });
}
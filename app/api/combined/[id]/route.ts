import prisma from '@/app/db'
import { NextRequest, NextResponse } from 'next/server'


export async function GET(request: NextRequest, 
    { params }: { params: {id: string } }) {
        const id = params.id
        const getFullContact = await prisma.contact.findUnique({
          where: {
            id: id
          },
          include: {
            phone: true,
            email: true,
            junction: true,
            cont_note: true,
          },
        });
        return NextResponse.json(getFullContact)
}

/*
      coalition: true //Coalition has no direct-connect, can we join through the junction?
*/
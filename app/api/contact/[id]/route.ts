import prisma from '@/app/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: Request, 
    { params }: { params: {id: string } }
) {
    const id = params.id
    const contact = await prisma.contact.findUnique({
        where: {
            id: id
        }
    })
    return NextResponse.json(contact)
  }

export async function PUT(
    request: Request, 
    { params }: { params: {id: string } }
) {
    const id = params.id
    const json = await request.json()
    const updated = await prisma.contact.update({
        where: {
            id: id
        },
        data: {
            first_name: json.first_name || null,
            last_name: json.last_name || null,
            org: json.org || null,
            last_contact: json.last_contact || null,
            last_con_type: json.last_con_type || null,
            next_contact: json.next_contact || null,
            next_con_type: json.next_con_type || null,
        }
    })
    return NextResponse.json(updated)
  }

export async function PATCH(
    request: Request,
    { params }: { params: {id: string } }
  ) {
    const id = params.id
    const json = await request.json()
    const updated = await prisma.contact.update({
    where: {
        id: id
    },
    data: json
    })
    return NextResponse.json(updated)
}

export async function DELETE(
    request: Request,
    { params }: { params: {id: string } }
  ) {
    const id = params.id
    const deleted = await prisma.contact.delete({
    where: {
        id: id
    }
    })
    return NextResponse.json(deleted)
}
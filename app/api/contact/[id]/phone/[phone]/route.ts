import prisma from '@/app/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: Request, 
    { params }: { params: {phone: string } }
) {
    const phone = params.phone
    const contact = await prisma.phone.findUnique({
        where: {
            phone: phone
        }
    })
    return NextResponse.json(contact)
  }

export async function PUT(
    request: Request, 
    { params }: { params: {phone: string } }
) {
    const phone = params.phone
    const json = await request.json()
    const updated = await prisma.phone.update({
        where: {
            phone: phone
        },
        data: {
            cont_id_phone: json.cont_id_phone || null,
            phone: json.phone || null, 
        }
    })
    return NextResponse.json(updated)
  }

export async function PATCH(
    request: Request,
    { params }: { params: {phone: string } }
  ) {
    const phone = params.phone
    const json = await request.json()
    const updated = await prisma.phone.update({
    where: {
        phone: phone
    },
    data: json
    })

    return NextResponse.json(updated)
}

export async function DELETE(
    request: Request,
    { params }: { params: {phone: string } }
  ) {
    const phone = params.phone
    const deleted = await prisma.phone.delete({
    where: {
        phone: phone
    }
    })

    return NextResponse.json(deleted)
}
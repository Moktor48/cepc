// Inquiries to notes for specific coalitions in cepc.coal_notes

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

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
        data: json
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
    const deleted = await prisma.phonee.delete({
    where: {
        phone: phone, 10
    }
    })

    return NextResponse.json(deleted)
}
// Inquiries to notes for specific coalitions in cepc.coal_notes

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET(
    request: Request, 
    { params }: { params: {email: string } }
) {
    const email = params.email
    const contact = await prisma.email.findUnique({
        where: {
            email: email
        }
    })
    return NextResponse.json(contact)
  }

export async function PUT(
    request: Request, 
    { params }: { params: {email: string } }
) {
    const email = params.email
    const json = await request.json()
    const updated = await prisma.email.update({
        where: {
            email: email
        },
        data: {
            email: json.email || null,
            cont_id_email: json.cont_id_email || null,
        }
    })
    return NextResponse.json(updated)
  }

export async function PATCH(
    request: Request,
    { params }: { params: {email: string } }
  ) {
    const email = params.email
    const json = await request.json()
    const updated = await prisma.email.update({
    where: {
        email: email
    },
    data: json
    })

    return NextResponse.json(updated)
}

export async function DELETE(
    request: Request,
    { params }: { params: {email: string } }
  ) {
    const email = params.email
    const deleted = await prisma.email.delete({
    where: {
        email: email
    }
    })

    return NextResponse.json(deleted)
}
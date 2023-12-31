// Inquiries to notes for specific coalitions in cepc.coal_notes

import prisma from '@/app/db'
import { NextRequest, NextResponse } from 'next/server'


export async function GET(
    request: Request, 
    { params }: { params: {id: string } }
) {
    const id = params.id
    const contact = await prisma.coal_note.findUnique({
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
    const updated = await prisma.coal_note.update({
        where: {
            id: id
        },
        data: json
    })
    return NextResponse.json(updated)
  }

export async function PATCH(
    request: Request,
    { params }: { params: {id: string } }
  ) {
    const id = params.id
    const json = await request.json()
    const updated = await prisma.coal_note.update({
    where: {
        id: id
    },
    data: json
    })

    return NextResponse.json(updated)
}

export async function DELETE(
    request: Request,
    { params }: { params: {note: string } }
  ) {
    const id = params.note
    const deleted = await prisma.coal_note.delete({
    where: {
        id: id
    }
    })

    return NextResponse.json(deleted)
}

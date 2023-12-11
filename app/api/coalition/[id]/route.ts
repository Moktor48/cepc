// Inquiries to specific coalitions in cepc.coalition

import prisma from '@/app/db'
import { NextRequest, NextResponse } from 'next/server'


export async function GET(
    request: Request, 
    { params }: { params: {id: string} }
) {
    const id = params.id
    const coalition = await prisma.coalition.findUnique({
        where: {
            id: id
        }
    })
    return NextResponse.json(coalition)
  }

  export async function PUT(
    request: Request, 
    { params }: { params: {id: string} }
) {
    const id = params.id
    const json = await request.json()
    const updated = await prisma.coalition.update({
        where: {
            id: id
        },
        data: json
    })
    return NextResponse.json(updated)
  }

  export async function PATCH(
    request: Request,
    { params }: { params: {id: string} }
) {
    const id = params.id
    const json = await request.json()
    const updated = await prisma.coalition.update({
    where: {
        id: id
    },
    data: json
    })

    return NextResponse.json(updated)
}

export async function DELETE(
    request: Request,
    { params }: { params: {id: string} }
) {
    const id = params.id
    const deleted = await prisma.coalition.delete({
    where: {
        id: id
    }
    })

    return NextResponse.json(deleted)
}
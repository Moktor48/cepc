// Inquiries to specific coalitions in cepc.coalition

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET(
    request: Request, 
    { params }: { params: {name: string } }
) {
    const name = params.name
    const coalition = await prisma.coalition.findUnique({
        where: {
            name: name
        }
    })
    return NextResponse.json(coalition)
  }

  export async function PUT(
    request: Request, 
    { params }: { params: {name: string } }
) {
    const name = params.name
    const json = await request.json()

    const updated = await prisma.coalition.update({
        where: {
            name: name
        },
        data: json
    })
    return NextResponse.json(updated)
  }

  export async function PATCH(
    request: Request,
    { params }: { params: {name: string } }
  ) {
    const name = params.name
    const json = await request.json()

const updated = await prisma.coalition.update({
    where: {
        name: name
    },
    data: json
    })

    return NextResponse.json(updated)
}

export async function DELETE(
    request: Request,
    { params }: { params: {name: string } }
  ) {
    const name = params.name
  

const deleted = await prisma.coalition.delete({
    where: {
        name: name
    }
    })

    return NextResponse.json(deleted)
}
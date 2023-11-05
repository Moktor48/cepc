// Inquiries to add email to a contact in cepc.email
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function POST(request: Request,
    { params }: { params: {id: string } }) {
    const id = params.id    
    const json = await request.json()
    const result = await prisma.email.create({
        data: {
            cont_id_email: parseInt(id, 10),
            email: json.email
        }
    })
    return NextResponse.json({result})
}

export async function GET(request: NextRequest,
    { params }: { params: {id: string } }) {
    const id = params.id
    const contact = await prisma.email.findMany({
        where: {
            cont_id_email: parseInt(id, 10)            
        }
    })
    return NextResponse.json(contact)
  }

// Both of these APIs work correctly
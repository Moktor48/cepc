// Inquiries to add a phone number to a specific contact in cepc.phone
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function POST(request: Request, 
    { params }: { params: {id: string } }) {
    const id = params.id    
    const json = await request.json()
    const result = await prisma.phone.create({
        data: {
            cont_id_phone: parseInt(id, 10),
            phone: json.phone
        }
    })
    return NextResponse.json({result})
}

export async function GET(request: NextRequest, 
    { params }: { params: {id: string } }) {
        const id = params.id
        const contact = await prisma.phone.findMany({
            where: {
                cont_id_phone: parseInt(id, 10)
            }
        })
    return NextResponse.json(contact)
  }

  // When sending the post request, phone.cont_id_phone = contact.id

  // Both of these APIs work correctly

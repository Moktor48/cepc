import prisma from '@/app/db'
import { NextRequest, NextResponse } from 'next/server'
export async function POST(request: Request, 
    { params }: { params: {id: string } }) {
    const id = params.id    
    const json = await request.json()
    const result = await prisma.phone.create({
        data: {
            cont_id_phone: id,
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
                cont_id_phone: id
            }
        })
    return NextResponse.json(contact)
  }

  // When sending the post request, phone.cont_id_phone = contact.id

  // Both of these APIs work correctly

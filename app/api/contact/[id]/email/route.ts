import prisma from '@/app/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: Request,
    { params }: { params: {id: string } }) {
    const id = params.id    
    const json = await request.json()
    const result = await prisma.email.create({
        data: {
            cont_id_email: id,
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
                cont_id_email: id            
            }
        })
    return NextResponse.json(contact)
  }
// Both of these APIs work correctly
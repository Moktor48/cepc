import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import ClientState from "@/app/components/ClientState";

const prisma = new PrismaClient()

export default async function Page( { params }: {params: { id: string } }) {

    const id = params.id;
    const coalitionData = [] 
    const contactData = await prisma.contact.findUnique({
        where: {
        id: id
        },
        include: {
        phone: true,
        email: true,
        junction: true,
        cont_note: true,
        }
    })

    const phoneData = contactData?.phone
    const emailData = contactData?.email
    const noteData = contactData?.cont_note
    const juncData = contactData?.junction

    if(juncData){
    for (let i = 0; i < juncData.length; i++){
    let mergeCoal = await prisma.coalition.findMany({
        where: {
            id: juncData[i].coalition_id
        }
    })
    coalitionData.push(mergeCoal[0])
    }}

return(
    <div>
        <ClientState
            key={id}
            id={id}
            contactData={contactData}
            coalitionData={coalitionData}
            phoneData={phoneData}
            emailData={emailData}
            noteData={noteData}
            juncData={juncData}
        />

    </div>

)}

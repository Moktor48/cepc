
import AddPhone from "../../components/AddPhone";
import Link from "next/link";
import AddEmail from "../../components/AddEmail";
import AddNote from "../../components/AddNote";
import NoteBox from "@/app/components/NoteBox";
import { PrismaClient } from "@prisma/client";
import CoalitionSelect from "@/app/components/CoalitionSelect";
import DeleteContact from "@/app/components/DeleteContact";
import ContData from "@/app/components/ContData";
import PhoneData from "@/app/components/PhoneData";
import CoalitionData from "@/app/components/CoalitionData";
import EmailData from "@/app/components/EmailData";

const prisma = new PrismaClient()

export default async function Page( { params }: {params: { id: string } }) {

    const id = params.id;
    const noteData = await prisma.cont_note.findMany({
        where: {
            contact_id: parseInt(id, 10)            
        }
    })

    const contactData = await prisma.contact.findMany({
        where: {
            id: parseInt(id, 10)             
        }
    })

    const phoneData = await prisma.phone.findMany({
        where: {
            cont_id_phone: parseInt(id, 10)            
        }
    })

    const emailData = await prisma.email.findMany({
        where: {
            cont_id_email: parseInt(id, 10)            
        }
    })
//No! JOIN tables here for result
    const juncData = await prisma.junction.findMany({
        where: {
            contact_id: parseInt(id, 10)            
        }
    })
    console.log(juncData)
    const merged = []
    for (let i=0; i < juncData.length; i++){
        merged.push(juncData[i].coalition_id)
    }
    console.log(merged)
    const coalitionDataX = []
    for (let i=0; i < merged.length; i++){
        let mergeCoal = await prisma.coalition.findMany({
            where: {
                id: merged[i]
            }
        })
        coalitionDataX.push(mergeCoal)
    }
    console.log(coalitionDataX)
    const coalitionData = []
    for (let i = 0; i < coalitionDataX.length; i++){
        coalitionData.push(coalitionDataX[i][0])
    }
    console.log(coalitionData) 
//End of crazy Coalition query: It works! Now to figure out how to get it to show up?
    return(
        <div>
            {contactData.map((dat: any) => (    
                <ContData
                    key={dat.id + 34}
                    id={dat.id}
                    fname={dat.first_name}
                    lname={dat.last_name}
                    org={dat.org}
                    lcont={dat.last_contact}
                    ncont={dat.next_contact}
                    ltype={dat.last_con_type}
                    ntype={dat.next_con_type}
                />))}<br />

                <p>Phone Numbers:</p>
            {phoneData.map((data: any) => (
                <PhoneData
                    key={data.phone}
                    phone={data.phone}
                />))}<br />

                <p>Email Addresses:</p>
            {emailData.map((data: any) => (
                <EmailData
                    key={data.email}
                    email={data.email}
                />))}<br />

                <p>Coalitions</p>
            {coalitionData.map((data: any) => (
                <CoalitionData
                    key={data.id + 26}
                    ID={data.id}
                    Coalition={data.name}
                />))}<br />

                <AddPhone 
                    id={params.id}
                /><br />

                <AddEmail
                    id={params.id}
                /><br />

                <AddNote
                    id={params.id}
                /><br />

            {noteData.map((data: any) => (
                <NoteBox
                    key={data.id+86}
                    entry={data.entry_date}
                    note={data.note}
                />))}<br />

                <CoalitionSelect 
                    key={params.id+97}
                    id={params.id}
                /><br />

                <DeleteContact
                    key={params.id+58}
                    idx={params.id}
                />

            <button><Link href={"../.."}>Go back!</Link></button>
        </div>

    )
}


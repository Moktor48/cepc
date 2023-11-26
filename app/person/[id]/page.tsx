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
    console.log(juncData)


    if(juncData){

    for (let i = 0; i < juncData.length; i++){
// Inside LOOP
    let mergeCoal = await prisma.coalition.findMany({
        where: {
            id: juncData[i].coalition_id
        }
    })
    coalitionData.push(mergeCoal[0])
    console.log(coalitionData)


// Inside LOOP,     coalData = mergeCoal.concat(juncData)
    }}


return(
    <div>
            <ContData
                key={contactData.id + "cd"}
                id={contactData.id}
                fname={contactData.first_name}
                lname={contactData.last_name}
                org={contactData.org}
                lcont={contactData.last_contact}
                ncont={contactData.next_contact}
                ltype={contactData.last_con_type}
                ntype={contactData.next_con_type}
                /><br />

            <p>Phone Numbers:</p>
            {phoneData.map((data: any) => (  
            <PhoneData
                key={data.phone}
                id={id}
                phone={data.phone} 
                />))}<br />

            <p>Email Addresses:</p>
            {emailData.map((data: any) => (      
            <EmailData
                key={data.email}
                id={id}
                email={data.email} 
                />))}<br />

            <p>Coalitions</p>
            {coalitionData.map((data: any) => (
            <CoalitionData
                key={data.id + "coal"}
                ID={data.id}
                Coalition={data.name}
                conID={id}
                junc={juncData}
                />))}<br />

            <p>Notes:</p>
            {noteData.map((data: any) => (    
            <NoteBox
                key={data.id + "note"}
                id={data.id}
                conID={id}
                entry={data.entry_date}
                note={data.note} 
                />))}<br />

            <AddPhone
                key={id + "phn"} 
                id={id}
            /><br />

            <AddEmail
                key={id + "eml"}
                id={id}
            /><br />

            <AddNote
                key={id + "nt"}
                id={id}
            /><br />

            <CoalitionSelect 
                key={id + "cs"}
                id={id}
            /><br />

            <DeleteContact
                key={id + "dc"}
                idx={id}
            />

        <button><Link href={"../.."}>Go back!</Link></button>
    </div>

)}
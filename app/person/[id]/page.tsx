
import AddPhone from "../../components/AddPhone";
import Link from "next/link";
import AddEmail from "../../components/AddEmail";
import AddNote from "../../components/AddNote";
import NoteBox from "@/app/components/NoteBox";
import { PrismaClient } from "@prisma/client";
import CoalitionSelect from "@/app/components/CoalitionSelect";
const prisma = new PrismaClient()

function ContData({id, fname, lname, org, lcont, ncont, ltype, ntype}){
    const [Nex, a, b] = ncont.toISOString().split('T')
    const [Las, c, d] = lcont.toISOString().split('T')
    return(
        <div>
            <h1>{fname} {lname}</h1>
            <p>Organization: {org}</p>
            <p>The last contact occured on {Las} by {ltype}</p>
            <p>The next contact is scheduled for {Nex} by {ntype}</p>
        </div>
    )
}

export default async function Page( { params }: {params: { id: string } }) {

    const id = params.id;
    const contact = await prisma.cont_note.findMany({
        where: {
            contact_id: parseInt(id, 10)            
        }
    })

    const userData = await prisma.contact.findMany({
        where: {
            id: parseInt(id, 10)             
        }
    })



    return(
        <div>
            {userData.map((dat: any) => (    
                <ContData
                    key={dat.id}
                    id={dat.id}
                    fname={dat.first_name}
                    lname={dat.last_name}
                    org={dat.org}
                    lcont={dat.last_contact}
                    ncont={dat.next_contact}
                    ltype={dat.last_con_type}
                    ntype={dat.next_con_type}
                />))}
                <AddPhone 
                    id={params.id}
                />
                <AddEmail
                    id={params.id}
                />
                <AddNote
                    id={params.id}
                />
            {contact.map((data: any) => (
                <NoteBox
                    key={data.id}
                    entry={data.entry_date}
                    note={data.note}
                />))}
                <CoalitionSelect 
                    key={params.id}
                    id={params.id}
                />                
            <button><Link href={"../.."}>Go back!</Link></button>
        </div>

    )
}


import { GetContNotes, GetUser } from "@/app/components/GetData";
import AddPhone from "./AddPhone";
import Link from "next/link";
import AddEmail from "./AddEmail";
import AddNote from "./AddNote";
import NoteBox from "@/app/components/NoteBox";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function Page( { params }: {params: { id: string } }) {

    const id = params.id;
    const contact = await prisma.cont_note.findMany({
        where: {
            contact_id: parseInt(id, 10)            
        }
    })
    const userData = await GetUser(id)

    console.log(contact)

    return(
        <div>
        <div>
            <h1>{userData.first_name}  {userData.last_name}</h1>
            <p>Organization: {userData.org}</p>
            <p>The last contact occured on {userData.last_contact} by {userData.last_con_type}</p>
            <p>The next contact is scheduled for {userData.next_contact} by {userData.next_con_type}</p>
        </div>
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
        <button><Link href={"../.."}>Go back!</Link></button>
        </div>
    )
}

/*
export async function GET(request: Request,
    { params }: { params: {id: string } }) {
    const id = params.id
    const contact = await prisma.cont_note.findMany({
        where: {
            contact_id: parseInt(id, 10)            
        }
    })
    return NextResponse.json(contact)
  }

*/
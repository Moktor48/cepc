import CoalData from "../../components/CoalData";
import NoteBox from "@/app/components/NoteBox";
import AddCoalNote from "../../components/AddCoalNote";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function Page( { params }: {params: { id: string } }) {

    const id = params.id
    const userData = await prisma.coalition.findMany({
        where: {
            id: (parseInt(id)),      
        },
    })

    const coalData = await prisma.coal_note.findMany({
        where: {
            coalition_id: (parseInt(id))      
        }
    })
    console.log(userData)
    return(
        <>
        {userData.map((data: any) => (
            <CoalData
                key={data.id}
                ID={data.id}
                Coalition = {data.name}
                NexCon={data.next_contact}
                LasCon={data.last_contact}
                P1={data.priority1}
                P2={data.priority2}
                P3={data.priority3}
                Phase={data.phase}
            />
))}
            <AddCoalNote
                coalition_id={params.id}
            />
        {coalData.map((data: any) => (
            <NoteBox
                key={data.id}
                entry={data.entry_date}
                note={data.note}
            />))}

        </>
    )
}
/*
<>
<h1>Coalitions Page</h1>
{userData.map((data) => (
<div>
    <Link href={`/${data.name}`}>{data.name}</Link>

</div>))}
</>) 

    const id = params.id;
    const contact = await prisma.cont_note.findUnique({
        where: {
            name: name         
        }
    })
    const userData = await GetUser(id)

    console.log(contact)


*/
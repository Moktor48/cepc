import CoalData from "../../components/CoalData";
import NoteBox from "@/app/components/NoteBox";
import AddCoalNote from "../../components/AddCoalNote";
import prisma from "@/app/db";
import DeleteCoalition from "@/app/components/DeleteCoalition";
import ContName from "@/app/components/ContName";
import ModCoalition from "@/app/components/ModCoalition";


export default async function Page( { params }: {params: { id: string } }) {

    const id = params.id
    const contactData = []
    const coalitionData = await prisma.coalition.findUnique({
        where: {
            id: id     
        },
        include: {
            junction: true,
            coal_note: true
        }
    })
    const noteData = coalitionData?.coal_note
    const juncData = coalitionData?.junction

    if(juncData){
        for (let i = 0; i < juncData.length; i++){
        let mergeCoal = await prisma.contact.findMany({
            where: {
                id: juncData[i].contact_id
            }
        })
        contactData.push(mergeCoal[0])
        }}

    return(
        <>
            <CoalData
                key={coalitionData?.id}
                ID={coalitionData?.id}
                Coalition = {coalitionData?.name}
                NexCon={coalitionData?.next_contact}
                LasCon={coalitionData?.last_contact}
                P1={coalitionData?.priority1}
                P2={coalitionData?.priority2}
                P3={coalitionData?.priority3}
                Phase={coalitionData?.phase}
                LCT={coalitionData?.last_con_type}
                NCT={coalitionData?.next_con_type}
            /><br />

            <p>Members:</p>
            <div className="max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md"> 
            {contactData.map((data: any) => (     
            <ContName
                key={data.id}
                id={data.id}
                fname={data.first_name} 
                lname={data.last_name}
                junc={juncData}
                coalition_id={id}
            />
            ))}
            </div><br />
            <p>Coalition notes:</p>
            {noteData?.map((data: any) => (
            <NoteBox
                key={data.id}
                id={data.id}
                enType="coalition"
                conID={id}
                entry={data.entry_date}
                note={data.note}
            />))}<br />
            <p>Add Coalition Notes:</p>
            <AddCoalNote
                coalition_id={params.id}
            /><br />
            <p>Modify Coalition:</p>
            <ModCoalition
                key={id + "modCoal"}
                coalitionData={coalitionData}
                contactData={contactData}
            /><br />
            <DeleteCoalition 
                key={id}
                idx={id}
            />
        </>
    )
}

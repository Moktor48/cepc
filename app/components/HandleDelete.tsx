import prisma from "../db"


export default async function HandleDelete(idx){
    const id = idx

    async function handleDelete(){
    confirm("Are you SURE you want to do this?")
    if(confirm("Are you SURE you want to do this?") == true) {
        await prisma.contact.delete({
            where: {
                id: parseInt(id, 10)
            }
            })
        return alert("Contact Deleted")
    } else {
        return alert("Delete Cancelled")
    }}

}
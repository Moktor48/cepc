import { GetCoalition } from "../../components/GetData";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function Page( { params }: {params: { name: string } }) {

    const name = params.name;
    const userData = await GetCoalition(name) 
    //const contact = await prisma.coalition.findMany()

    return(

        <div>
            <h1>{userData.name}</h1>
            <p>Priority: {userData.priority}</p> {/* maybe loop to fix multi-priority coalitions?*/}
            <p>Phase: {userData.phase}</p>
            <p>The last contact occured on {userData.last_contact}</p>
            <p>The next contact is scheduled for {userData.next_contact}</p>
        </div>

    )
}


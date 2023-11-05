import { GetCoalition } from "../components/GetData";


export default async function Page( { params }: {params: { id: string } }) {

    const id = params.id;
    const userData = await GetCoalition(id)
    return(

        <div>
            <h1>Coalitions Page</h1>
            <h2>{userData.name}</h2>
            <p>Priority: {userData.priority}</p>
            <p>Phase: {userData.phase}</p>
            <p>The last contact occured on {userData.last_contact}</p>
            <p>The next contact is scheduled for {userData.next_contact}</p>
        </div>

    )
}




import RootLayout from "../../layout"
import GetUser from "@/app/components/GetUser"
import { useSearchParams } from "next/navigation"

export default async function PersonBuild({params: {id}}) {
    const userData = await GetUser(id)
    return(
        <RootLayout>
            <h1>{userData.first_name}  {userData.last_name}</h1>
            <p>Organization: {userData.org}</p>
            <p>The last contact occured on {userData.last_contact} by {userData.last_contact_type}</p>
            <p>The next contact is scheduled for {userData.next_contact} by {userData.next_contact_type}</p>


        </RootLayout>
    )
}
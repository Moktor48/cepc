import { GetContNotes, GetUser } from "@/app/components/GetData";

import Link from "next/link";


export default async function Page() {

    const id = "1";
    const response = await fetch(`http://localhost:3000/api/contact/${id}`)
    const contData = await fetch(`http://localhost:3000/api/contact/${id}/note`, {method: 'GET',})
                                  http://localhost:3000/api/contact/1/note/

    console.log(contData.json())

    return(
        <div>

        </div>
    )
}
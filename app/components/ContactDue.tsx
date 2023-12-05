"use client";
import Link from "next/link"
import { useEffect, useState } from "react"

function ContactTable({ID, FirstName, LastName, Org}) {
    return(   
        <tr key={ID.toString()}>
            <td className=""><Link href={`/person/${ID}`}>{FirstName + " " + LastName}</Link></td>
            <td className="">{Org}</td>

        </tr>
    )
}

export default function ContactDue() {
    const [cont, setCont] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch("/api/contact")
        .then((res) => res.json())
        .then((data) => {
            setCont(data)
            setLoading(false)
        })
      }, []);

      if (isLoading) return <p>Loading...</p>
      if (!cont) return <p>No data</p>

      return(
        <div className="flex flexCon justify-center">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Organization</th>
                    </tr>
                </thead>
                <tbody>
                {cont.map(con => (
                    <ContactTable
                        key={con.id}
                        ID={con.id}
                        FirstName={con.first_name}
                        LastName={con.last_name}
                        Org={con.org}
                    />)
                )}
                </tbody>
            </table>
        </div>
      )
    }

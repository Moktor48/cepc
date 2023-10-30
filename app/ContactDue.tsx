"use client";
import ContactTable from "./ContactTable"
import { useEffect, useState } from "react"


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
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Organization</th>
                        <th>Last Contact</th>
                        <th>Next Contact</th>
                        <th>Next Contact Type</th>
                    </tr>
                </thead>

                <tbody>
                {cont.map(con => (
                    <ContactTable
                        ID={con.id}
                        FirstName={con.first_name}
                        LastName={con.last_name}
                        Org={con.org}
                        LasCon={con.last_contact}
                        NexCon={con.next_contact}
                        NexConTyp={con.next_con_type}
                    />)
                )}
                </tbody>
            </table>
        </div>
      )
    }

    /*{first_name: "", last_name: "", org: "", last_contact: "", next_contact: "", next_con_type: ""}
    <ContactTable
                        ID={con.id}
                        FirstName={con.first_name}
                        LastName={con.last_name}
                        Org={con.organization}
                        LasCon={con.last_contact}
                        NexCon={con.next_contact}
                        NexConTyp={con.next_contact_type}
    */
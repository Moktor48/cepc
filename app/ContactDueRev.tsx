"use client";
import { useEffect, useState } from "react"





function ContactReturn(conEntry){
    return(        
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
            {conEntry && conEntry.map((con) => {
            <tr key={con.id}>
                <td>{con.first_name + " " + con.last_name}</td>
                <td>{con.org}</td>
                <td>{con.last_contact}</td>
                <td>{con.next_contact}</td>
                <td>{con.next_con_type}</td>
            </tr>
                })

            }
        </tbody>
    </table>
            )
            }

export default function ContactDue() {
    const [conEntry, setConEntry] = useState({first_name: "", last_name: "", org: "", last_contact: "", next_contact: "", next_con_type: ""})
    useEffect(() => {
        fetch("/api/contact")
        .then((res) => {return res.json();})
        .then(data => setConEntry(data))
      }, []);
      
      return(
        <div>
            <ContactReturn />
        </div>
      )
    }




/*
End result-
Name            Org         Last Contact            Next Contact
Person          theirJob    asWritten               Either 1 month after LastContact or as set appointment

Query should order results with nearest next contact date at the top
Style queries so that everything in the upcoming week is highlighted/more visible
Click-on query/link to bring to notes page where you can see all contact info and enter notes
Checkbox for completed contact, and alerts for past-due contacts
toMany database for dates, will track all contact dates and will allow the checkbox to remove entries from query

GET all your records... array? Build a function to deconstruct the array and push the contents into the TD elements


*/
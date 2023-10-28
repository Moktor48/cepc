"use client";

import ContactEntry from "./EnterContact"
import CallNext from "./ContactDue";



export default function App () {

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th> {/*Combine First + Last*/}
                        <th>Organization</th>
                        <th>Last Contact</th>
                        <th>Next Contact</th>
                        <th>Next Contact Type</th> {/*Include date and whether it is set (true) or follow-up (false)*/}
                    </tr>
                </thead>
                <tbody>
{/*                    <CallNext /> */}
                </tbody>
            </table>
            <ContactEntry />
        </div>
    )
};
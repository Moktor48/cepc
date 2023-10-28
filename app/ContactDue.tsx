

import { useEffect, useState } from "react"




function ContactReturn({FirstName, LastName, Organization, NextContact, NextContactType}){
    return(
        <tr>
            <td>{FirstName}</td>
            <td>{LastName}</td>
            <td>{Organization}</td>
            <td>{NextContact}</td>
            <td>{NextContactType}</td>
        </tr>
    )
}

export default async function CallNext() {
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            } catch (error) {
            console.log("error", error);
            }
    };
    return(
        <>
                {
                cont.map((con) => {
                    return(
                        <ContactReturn
                        key={con.ID}
                        FirstName={con.FirstName}
                        LastName={con.LastName}
                        Organization={con.Organization}
                        NextContact={con.NextContact}
                        NextContactType={con.NextContactType}
                        />
                    )})}</>)}






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
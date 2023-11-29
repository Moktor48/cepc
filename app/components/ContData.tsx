"use client"
import { useEffect, useState } from "react"

export default function ContData({id, fname, lname, org, lcont, ncont, ltype, ntype}){

    const [Nex, a, b] = ncont.toISOString().split('T')
    const [Las, c, d] = lcont.toISOString().split('T')

    async function saveChange(){

        try{
        fetch(`/api/contact/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
        } catch (error){
            console.error(error)
        }
    
    }




    return(
        <div className="space-x-4">
            <h1 className="font-bold text-xl underline inline-block">{fname} {lname}</h1><span onClick={saveChange}className="inline-block text-red-600 text-xs">Edit</span>
            <p className="">Organization: {org}</p>
            <p>The last contact occured on {Las} by {ltype}</p>
            <p>The next contact is scheduled for {Nex} by {ntype}</p>
        </div>
    )
}

/*
Link the edit to change the state to make the text changable, on submit it will PATCH and return to normal state. 

normState:  Person Name
            Org: Org

modState:   Changable Text with box filled in with current name
            ""                  box filled in with Org

Submit => PATCH update to update with edits
            refresh back to normState

    async function handleChange(e: any) { 
        setNormState(prevNormState => {
            return {
                ...prevNormState,
                [e.target.name]: e.target.value
            }
        })
    }
*/
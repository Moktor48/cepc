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
        <div className="space-x-4 max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            <h1 className="font-bold text-4xl text-center underline">{fname} {lname}</h1><br />
            <p className="">Organization: {org}</p>
            <p>The last contact occured on {Las} by {ltype}</p>
            <p>The next contact is scheduled for {Nex} by {ntype}</p>
        </div>
    )
}

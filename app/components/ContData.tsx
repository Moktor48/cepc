"use client"
import { useEffect, useState } from "react"

export default function ContData({id, fname, lname, org, lcont, ncont, ltype, ntype}){
    let e = fname
    let f = " "
    let g = lname
    const [normState, setNormState] = useState([e, f, g])
    const [Nex, a, b] = ncont.toISOString().split('T')
    const [Las, c, d] = lcont.toISOString().split('T')

    async function saveChange(){
        const formData = {first_name: normState[0], last_name: normState[2]}
        console.log(normState)
        console.log(formData)
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
            <h1 className="font-bold text-xl underline inline-block" contentEditable onChange={e => setNormState(e.target)}>{normState}</h1><span onClick={saveChange}className="inline-block text-red-600 text-xs">Save</span>
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
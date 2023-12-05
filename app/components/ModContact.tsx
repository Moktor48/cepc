"use client"
import React, { useState } from 'react'

type formData = {
    last_contact: string | undefined,
    last_con_type: string | undefined,
    next_contact: string | undefined,
    next_con_type: string | undefined,
}

export default function ModContact({id, isLoading, onSub}) {
    const [formData, setFormData] = useState<formData>(
        {last_contact: undefined, last_con_type: undefined, next_contact: undefined, next_con_type: undefined}
    )



    async function handleChange(e: any) { 
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    
    async function handleSubmit(e: any) {
        e.preventDefault();
        

        if (formData.last_contact){
        const lastDateIso = new Date(formData.last_contact).toISOString();
        formData.last_contact = lastDateIso}

        if (formData.next_contact){
        const nextDateIso = new Date(formData.next_contact).toISOString();
        formData.next_contact = nextDateIso}
        console.log(formData)
        try {
          fetch(`/api/contact/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          setFormData({last_contact: undefined, last_con_type: undefined, next_contact: undefined, next_con_type: undefined})


        } catch (error){
            console.error(error)
        }
    }
        return(

        <form className="container max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md" onSubmit={handleSubmit}>
            
            <p className="header block m-auto text-center text-4xl">Contact Changes</p><br />
            <p className="mt-4 title block m-auto text-center text-2xl">Last Contact Date</p>
                <input 
                    className="date1 text-black"
                    type="date" 
                    id="lastConDate" 
                    name="last_contact" 
                    onChange={handleChange}
                    value={formData.last_contact}
                /><br />

                <input 
                    className="rad1"
                    type="radio" 
                    id="lastConTypePer" 
                    name="last_con_type" 
                    value="In-Person" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "In-Person"}
                /><label className="lab1" htmlFor="lastConTypePer">In-Person</label><br />

                <input 
                    className="rad2"
                    type="radio" 
                    id="lastConTypeEm" 
                    name="last_con_type" 
                    value="E-Mail" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "E-Mail"}
                /><label className="lab2" htmlFor="lastConTypeEm">E-Mail</label><br />
                
                <input
                    className="rad3" 
                    type="radio" 
                    id="lastConTypePh" 
                    name="last_con_type" 
                    value="Phone" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "Phone"}
                /><label className="lab3" htmlFor="lastConTypePh">Phone</label><br />
                
                <input 
                    className="rad4"                
                    type="radio" 
                    id="lastConTypeVM" 
                    name="last_con_type" 
                    value="Virtual Meeting" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "Virtual Meeting"}
                /><label className="lab4" htmlFor="lastConTypeVM">Virtual Meeting</label><br />

                <p className="mt-4 title2 block m-auto text-center text-2xl">Next Contact Date</p>
                
                <input 
                    className="date2 text-black"
                    type="date" 
                    id="nextConDate" 
                    name="next_contact" 
                    onChange={handleChange}
                    value={formData.next_contact}
                /><br />
                
                <input 
                    className="rad5" 
                    type="radio" 
                    id="nextConTypePer" 
                    name="next_con_type" 
                    value="In-Person" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "In-Person"}
                /><label className="lab5" htmlFor="nextConTypePer">In-Person</label><br />
                
                <input
                    className="rad6"  
                    type="radio" 
                    id="nextConTypeEm" 
                    name="next_con_type" 
                    value="E-Mail" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "E-Mail"}
                /><label className="lab6" htmlFor="nextConTypeEm">E-Mail</label><br />
                
                <input 
                    className="rad7" 
                    type="radio" 
                    id="nextConTypePh" 
                    name="next_con_type" 
                    value="Phone" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "Phone"}
                /><label className="lab7" htmlFor="nextConTypePh">Phone</label><br />
                
                <input 
                    className="rad8" 
                    type="radio" 
                    id="nextConTypeVM" 
                    name="next_con_type" 
                    value="Virtual Meeting" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "Virtual Meeting"}
                /><label className="lab8" htmlFor="nextConTypeVM">Virtual Meeting</label><br />



                <button className="button justify-self-center mt-4" disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span>Update Contact</span>}
                </button>

        </form>
        )
        }


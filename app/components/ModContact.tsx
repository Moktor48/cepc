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
            <form onSubmit={handleSubmit}>

                <input 
                    type="date" 
                    id="lastConDate" 
                    name="last_contact" 
                    onChange={handleChange}
                    value={formData.last_contact}
                /><br />
                <label htmlFor="lastConTypePer">In-Person</label>
                <input 
                    type="radio" 
                    id="lastConTypePer" 
                    name="last_con_type" 
                    value="In-Person" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "In-Person"}
                /><br />
                <label htmlFor="lastConTypeEm">E-Mail</label>
                <input 
                    type="radio" 
                    id="lastConTypeEm" 
                    name="last_con_type" 
                    value="E-Mail" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "E-Mail"}
                /><br />
                <label htmlFor="lastConTypePh">Phone</label>
                <input 
                    type="radio" 
                    id="lastConTypePh" 
                    name="last_con_type" 
                    value="Phone" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "Phone"}
                /><br />
                <label htmlFor="lastConTypeVM">Virtual Meeting</label>
                <input 
                    type="radio" 
                    id="lastConTypeVM" 
                    name="last_con_type" 
                    value="Virtual Meeting" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "Virtual Meeting"}
                /><br />
                <input 
                    type="date" 
                    id="nextConDate" 
                    name="next_contact" 
                    onChange={handleChange}
                    value={formData.next_contact}
                /><br />
                <label htmlFor="nextConTypePer">In-Person</label>
                <input 
                    type="radio" 
                    id="nextConTypePer" 
                    name="next_con_type" 
                    value="In-Person" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "In-Person"}
                /><br />
                <label htmlFor="nextConTypeEm">E-Mail</label>
                <input 
                    type="radio" 
                    id="nextConTypeEm" 
                    name="next_con_type" 
                    value="E-Mail" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "E-Mail"}
                /><br />
                <label htmlFor="nextConTypePh">Phone</label>
                <input 
                    type="radio" 
                    id="nextConTypePh" 
                    name="next_con_type" 
                    value="Phone" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "Phone"}
                /><br />
                <label htmlFor="nextConTypeVM">Virtual Meeting</label>
                <input 
                    type="radio" 
                    id="nextConTypeVM" 
                    name="next_con_type" 
                    value="Virtual Meeting" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "Virtual Meeting"}
                /><br />
                <button disabled={isLoading}>
                {isLoading && <span className="text-red bg-black">Submitting...</span>}
                {!isLoading && <span className="text-black bg-yellow-200">Update Contact</span>}
                </button>
            </form>
        )
        }


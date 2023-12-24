"use client"
import React, { useState } from 'react'

export default function EnterContact() {
    const [formData, setFormData] = useState(
        {id: "", first_name: "", last_name: "", org: "", last_contact: "", last_con_type: "", next_contact: "", next_con_type: ""}
    )
    const [isLoading, setIsLoading] = useState(false)


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
        setIsLoading(true)
        const randomID = "contact" + Math.floor(Math.random() * 1000000000).toString()
        formData.id = randomID
        const lastDateIso = new Date(formData.last_contact).toISOString();
        formData.last_contact = lastDateIso
        const nextDateIso = new Date(formData.next_contact).toISOString();
        formData.next_contact =nextDateIso

        try {
          fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          setFormData({id: "", first_name: "", last_name: "", org: "", last_contact: "", last_con_type: "", next_contact: "", next_con_type: ""})
          setIsLoading(false)

        } catch (error){console.error(error)
        }
    }
        return(
            <form className="container max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md" onSubmit={handleSubmit}>
            <p className="header block m-auto text-center text-4xl">Contact Entry</p><br />
               
                
                <input 
                    className="fn mt-4"
                    type="text"
                    required
                    placeholder='First Name'
                    onChange={handleChange}
                    name='first_name'
                    value={formData.first_name}
                /><br />
                <input 
                    className="ln"
                    type="text"
                    required
                    placeholder='Last Name'
                    onChange={handleChange}
                    name='last_name'
                    value={formData.last_name}
                /><br />
                <input 
                    className="org"
                    type="text"
                    placeholder='Organization'
                    onChange={handleChange}
                    name='org'
                    value={formData.org}
                /><br />

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
                />
                <label className="lab1" htmlFor="lastConTypePer">In-Person</label><br />


                <input 
                    className="rad2"
                    type="radio" 
                    id="lastConTypeEm" 
                    name="last_con_type" 
                    value="E-Mail" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "E-Mail"}
                />
                <label className="lab2" htmlFor="lastConTypeEm">E-Mail</label>
                <br />

                
                <input 
                    className="rad3"
                    type="radio" 
                    id="lastConTypePh" 
                    name="last_con_type" 
                    value="Phone" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "Phone"}
                />
                <label className="lab3" htmlFor="lastConTypePh">Phone</label><br />

                
                <input 
                    className="rad4"
                    type="radio" 
                    id="lastConTypeVM" 
                    name="last_con_type" 
                    value="Virtual Meeting" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "Virtual Meeting"}
                />
                <label className="lab4" htmlFor="lastConTypeVM">Virtual Meeting</label><br />

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
                />
                <label className="lab5" htmlFor="nextConTypePer">In-Person</label><br />

                
                <input 
                    className="rad6" 
                    type="radio" 
                    id="nextConTypeEm" 
                    name="next_con_type" 
                    value="E-Mail" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "E-Mail"}
                />
                <label className="lab6" htmlFor="nextConTypeEm">E-Mail</label><br />

                
                <input 
                    className="rad7" 
                    type="radio" 
                    id="nextConTypePh" 
                    name="next_con_type" 
                    value="Phone" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "Phone"}
                />
                <label className="lab7" htmlFor="nextConTypePh">Phone</label><br />

                
                <input 
                    className="rad8" 
                    type="radio" 
                    id="nextConTypeVM" 
                    name="next_con_type" 
                    value="Virtual Meeting" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "Virtual Meeting"}
                />
                <label className="lab8" htmlFor="nextConTypeVM">Virtual Meeting</label><br />

                <button className="button justify-self-center mt-4" disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span className="text-black bg-yellow-200">Submit Contact</span>}
                </button>
            </form>
        )
        }
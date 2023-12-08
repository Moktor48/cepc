"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function ModCoalition({coalitionData, contactData}) {
    const id = coalitionData.id
    const name = coalitionData.name
    const priority1 = coalitionData.priority1
    const priority2 = coalitionData.priority2
    const priority3 = coalitionData.priority3
    const phase = coalitionData.phase
    const [last_contact, a, b] = coalitionData.last_contact.toISOString().split('T')
    const last_con_type = coalitionData.last_con_type
    const [next_contact, c, d] = coalitionData.next_contact.toISOString().split('T')
    const next_con_type = coalitionData.next_con_type

    const cid = contactData.id

    const router = useRouter()

    const [formData, setFormData] = useState({id, name, priority1, priority2, priority3, phase, last_contact, last_con_type, next_contact, next_con_type})
    const [conData, setConData] = useState({last_contact: formData.last_contact, last_con_type: formData.last_con_type, next_contact: formData.next_contact, next_con_type: formData.next_con_type})
    const [isChecked1, setIsChecked1] = useState(formData.priority1)
    const [isChecked2, setIsChecked2] = useState(formData.priority2)
    const [isChecked3, setIsChecked3] = useState(formData.priority3)
    const [isLoading, setIsLoading] = useState(false)

    async function handleChange(e: any) {

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })

        setConData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    async function handleClick(e: any) { 
        const checked = e.target.checked
        const name = e.target.name
        const value = e.target.value
        if (name == "priority1") {
            return setIsChecked1(!isChecked1)
        } else if (name == "priority2") {
            return setIsChecked2(!isChecked2)
        } else if (name == "priority3") {
            return setIsChecked3(!isChecked3)
        } else {
            return console.log("You did it wrong, bonehead.")
        }
    }

    async function handleSubmit(e: any) {
        e.preventDefault();

        if (formData.last_contact){
            const lastDateIso = new Date(formData.last_contact).toISOString();
            formData.last_contact = lastDateIso}

        if (formData.next_contact){
            const nextDateIso = new Date(formData.next_contact).toISOString();
            formData.next_contact = nextDateIso}

        if (conData.last_contact){
            const lastDateIso = new Date(conData.last_contact).toISOString();
            conData.last_contact = lastDateIso}
    
        if (conData.next_contact){
            const nextDateIso = new Date(conData.next_contact).toISOString();
            conData.next_contact = nextDateIso}

        const response = await fetch(`/api/coalition/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })

        for (let i = 0; i < contactData.length; i++){
            await fetch(`/api/contact/${contactData[i].id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(conData),
            })
        }


        if (response.ok){
        router.refresh()
        } 
    }
        return(

            <form className="container max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md" onSubmit={handleSubmit}>
                <p className="header block text-center text-4xl">Coalition Entry</p><br />
                <input 
                    className="fn"
                    type="text"
                    required
                    placeholder='Coalition Name'
                    onChange={handleChange}
                    name='name'
                    value={formData.name}
                /><br />

                <p className="title block text-center text-2xl">Coalition Priorities</p>

                <input 
                    className="rad1"
                    type="checkbox"
                    name="priority1"
                    checked={isChecked1}
                    onChange={handleClick}
                />
                <label className="lab1" htmlFor="priority1">Priority 1</label>
                <br />

                <input 
                    className="rad2"
                    type="checkbox"
                    name="priority2"
                    checked={isChecked2}
                    onChange={handleClick}
                />
                <label className="lab2" htmlFor="priority2">Priority 2</label>                
                <br />

                <input 
                    className="rad3"
                    type="checkbox" 
                    name="priority3"
                    checked={isChecked3}
                    onChange={handleClick}
                />
                <label className="lab3" htmlFor="priority3">Priority 3</label>                
                <br />

                <p className="mt-4 title2 block m-auto text-center text-2xl">Coalition Phase</p>
                
                <input 
                    className="rad5"
                    type="radio" 
                    id="phaseEngage" 
                    name="phase" 
                    value="Engage" 
                    onChange={handleChange}
                    checked={formData.phase === "Engage"}
                />
                <label className="lab5" htmlFor="phaseEngage">Engage</label><br />
             
                <input 
                    className="rad6"
                    type="radio" 
                    id="phasePlan" 
                    name="phase" 
                    value="Plan" 
                    onChange={handleChange}
                    checked={formData.phase === "Plan"}
                />
                <label className="lab6" htmlFor="phasePlan">Plan</label><br />
                
                <input 
                    className="rad7"
                    type="radio" 
                    id="phaseImplement" 
                    name="phase" 
                    value="Implement" 
                    onChange={handleChange}
                    checked={formData.phase === "Implement"}
                />
                <label className="lab7" htmlFor="phaseImplement">Implement</label><br />
                
                <input 
                    className="rad8"
                    type="radio" 
                    id="phaseSustain" 
                    name="phase" 
                    value="Sustain" 
                    onChange={handleChange}
                    checked={formData.phase === "Sustain"}
                />
                <label className="lab8" htmlFor="phaseSustain">Sustain</label><br />

                <p className="mt-4 tx1 block m-auto text-center text-2xl">Last Contact Date</p> 

                <input 
                    className="date text-black mt-4 min-w-min"
                    type="date" 
                    id="lastConDate" 
                    name="last_contact" 
                    onChange={handleChange}
                    value={formData.last_contact}
                /><br />

                <input 
                    className="rad11"
                    type="radio" 
                    id="lastConTypePer" 
                    name="last_con_type" 
                    value="In-Person" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "In-Person"}
                />
                <label className="lab11" htmlFor="lastConTypePer">In-Person</label><br />


                <input 
                    className="rad12"
                    type="radio" 
                    id="lastConTypeEm" 
                    name="last_con_type" 
                    value="E-Mail" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "E-Mail"}
                />
                <label className="lab12" htmlFor="lastConTypeEm">E-Mail</label>
                <br />

                
                <input 
                    className="rad13"
                    type="radio" 
                    id="lastConTypePh" 
                    name="last_con_type" 
                    value="Phone" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "Phone"}
                />
                <label className="lab13" htmlFor="lastConTypePh">Phone</label><br />

                
                <input 
                    className="rad14"
                    type="radio" 
                    id="lastConTypeVM" 
                    name="last_con_type" 
                    value="Virtual Meeting" 
                    onChange={handleChange}
                    checked={formData.last_con_type === "Virtual Meeting"}
                />
                <label className="lab14" htmlFor="lastConTypeVM">Virtual Meeting</label><br />
                <p className="mt-4 tx2 block m-auto text-center text-2xl">Next Contact Date</p>

                <input 
                    className="date3 text-black mt-4 min-w-min"
                    type="date" 
                    id="nextConDate" 
                    name="next_contact" 
                    onChange={handleChange}
                    value={formData.next_contact}
                /><br />
                <input 
                    className="rad15" 
                    type="radio" 
                    id="nextConTypePer" 
                    name="next_con_type" 
                    value="In-Person" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "In-Person"}
                />
                <label className="lab15" htmlFor="nextConTypePer">In-Person</label><br />

                
                <input 
                    className="rad16" 
                    type="radio" 
                    id="nextConTypeEm" 
                    name="next_con_type" 
                    value="E-Mail" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "E-Mail"}
                />
                <label className="lab16" htmlFor="nextConTypeEm">E-Mail</label><br />

                
                <input 
                    className="rad17" 
                    type="radio" 
                    id="nextConTypePh" 
                    name="next_con_type" 
                    value="Phone" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "Phone"}
                />
                <label className="lab17" htmlFor="nextConTypePh">Phone</label><br />

                
                <input 
                    className="rad18" 
                    type="radio" 
                    id="nextConTypeVM" 
                    name="next_con_type" 
                    value="Virtual Meeting" 
                    onChange={handleChange}
                    checked={formData.next_con_type === "Virtual Meeting"}
                />
                <label className="lab18" htmlFor="nextConTypeVM">Virtual Meeting</label><br />

                <button className="button justify-self-center mt-4" disabled={isLoading}>
                {isLoading && <span className="text-red">Submitting...</span>}
                {!isLoading && <span className="text-black bg-yellow-200">Modify Coalition</span>}
                </button>
            </form>
        )
        }


"use client"
import { useState, useEffect } from "react"

export default function EnterCoalition() {

    const [formData, setFormData] = useState(
        {name: "", priority1: false, priority2: false, priority3: false, phase: "", last_contact: "", next_contact: ""}
    )

    const [isChecked1, setIsChecked1] = useState(false)
    const [isChecked2, setIsChecked2] = useState(false)
    const [isChecked3, setIsChecked3] = useState(false)

    const [isLoading, setIsLoading] = useState(false)


    async function handleChange(e: any) { 
        setFormData(prevFormData => {
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
        setIsLoading(true)
        formData.priority1 = isChecked1
        formData.priority2 = isChecked2
        formData.priority3 = isChecked3
        const lastDateIso = new Date(formData.last_contact).toISOString();
        formData.last_contact = lastDateIso
        const nextDateIso = new Date(formData.next_contact).toISOString();
        formData.next_contact = nextDateIso
        try {
          fetch('/api/coalition', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          setFormData({name: "", priority1: false, priority2: false, priority3: false, phase: "", last_contact: "", next_contact: ""})
          setIsChecked1(false)
          setIsChecked2(false)
          setIsChecked3(false)
          setIsLoading(false)

        } catch (error){console.error(error)
        }
    }
        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    required
                    placeholder='Coalition Name'
                    onChange={handleChange}
                    name='name'
                    value={formData.name}
                /><br />



                <input 
                    type="checkbox"
                    name="priority1"
                    checked={isChecked1}
                    onChange={handleClick}
                />
                <label htmlFor="priority1">Priority 1</label>
                <br />
                <input 
                    type="checkbox"
                    name="priority2"
                    checked={isChecked2}
                    onChange={handleClick}
                />
                <label htmlFor="priority2">Priority 2</label>                
                <br />
                <input 
                    type="checkbox" 
                    name="priority3"
                    checked={isChecked3}
                    onChange={handleClick}
                />
                <label htmlFor="priority3">Priority 3</label>                
                <br />



                <label htmlFor="phaseEngage">Engage</label>
                <input 
                    type="radio" 
                    id="phaseEngage" 
                    name="phase" 
                    value="Engage" 
                    onChange={handleChange}
                    checked={formData.phase === "Engage"}
                /><br />
                <label htmlFor="phasePlan">Plan</label>
                <input 
                    type="radio" 
                    id="phasePlan" 
                    name="phase" 
                    value="Plan" 
                    onChange={handleChange}
                    checked={formData.phase === "Plan"}
                /><br />
                <label htmlFor="phaseImplement">Implement</label>
                <input 
                    type="radio" 
                    id="phaseImplement" 
                    name="phase" 
                    value="Implement" 
                    onChange={handleChange}
                    checked={formData.phase === "Implement"}
                /><br />
                <label htmlFor="phaseSustain">Sustain</label>
                <input 
                    type="radio" 
                    id="phaseSustain" 
                    name="phase" 
                    value="Sustain" 
                    onChange={handleChange}
                    checked={formData.phase === "Sustain"}
                /><br />
                <input 
                    type="date" 
                    id="lastConDate" 
                    name="last_contact" 
                    onChange={handleChange}
                    value={formData.last_contact}
                /><br />
                <input 
                    type="date" 
                    id="nextConDate" 
                    name="next_contact" 
                    onChange={handleChange}
                    value={formData.next_contact}
                /><br />
                
                <button disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span>Submit Coalition</span>}
                </button>
            </form>
        )
        }

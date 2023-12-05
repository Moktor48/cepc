"use client"
import { useState, useEffect } from "react"

export default function EnterCoalition() {

    const [formData, setFormData] = useState(
        {id: "", name: "", priority1: false, priority2: false, priority3: false, phase: "", last_contact: "", next_contact: ""}
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
        const randomID = "coal" + Math.floor(Math.random() * 1000000000).toString()
        formData.id = randomID
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
          setFormData({id: "", name: "", priority1: false, priority2: false, priority3: false, phase: "", last_contact: "", next_contact: ""})
          setIsChecked1(false)
          setIsChecked2(false)
          setIsChecked3(false)
          setIsLoading(false)

        } catch (error){console.error(error)
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
                    className="date text-black mt-4"
                    type="date" 
                    id="lastConDate" 
                    name="last_contact" 
                    onChange={handleChange}
                    value={formData.last_contact}
                /><br />

                <p className="mt-4 tx2 block m-auto text-center text-2xl">Next Contact Date</p>

                <input 
                    className="date3 text-black mt-4"
                    type="date" 
                    id="nextConDate" 
                    name="next_contact" 
                    onChange={handleChange}
                    value={formData.next_contact}
                /><br />

                <button className="button justify-self-center mt-4" disabled={isLoading}>
                {isLoading && <span className="text-red">Submitting...</span>}
                {!isLoading && <span className="text-black bg-yellow-200">Submit Coalition</span>}
                </button>
            </form>
        )
        }

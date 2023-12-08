"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddCoalNote(props: any) {
    const router = useRouter()
    const [formNote, setFormNote] = useState(
        {
            id: "",
            note: "",
            entry_date: ""
        }
    )
    const [isLoading, setIsLoading] = useState(false)

    const id = props.coalition_id

    const handleChange = (e: any) => {
        setFormNote(prevFormNote => {
            return {
                ...prevFormNote,
                [e.target.name]: e.target.value
            }
        })
    }    
    
    async function handleSubmit(e: any) {
        e.preventDefault();
        setIsLoading(true)
        const randomID = "coalnote" + Math.floor(Math.random() * 1000000000).toString()
        formNote.id = randomID
        const lastDateIso = new Date(formNote.entry_date).toISOString();
        formNote.entry_date = lastDateIso

        const response = await fetch(`/api/coalition/${id}/note`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(formNote),
          })
        if (response.ok){
            setFormNote({
                id: "",
                note: "",
                entry_date: ""
        })
        setIsLoading(false)
        router.refresh()
    }
    }
        return(
            <form onSubmit={handleSubmit} className="cont2 max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
                <p className="header block m-auto text-center text-4xl">Add Notes</p>
                <input 
                    className="date datebar mt-4 min-w-min"
                    type="date"
                    required
                    id="entryDate" 
                    name="entry_date" 
                    onChange={handleChange}
                    value={formNote.entry_date}
                /><br />
                <input 
                    className="textbar mt-4 w-1/2"
                    type="textarea"
                    required
                    placeholder='Add Notes Here'
                    onChange={handleChange}
                    name='note'
                    value={formNote.note}
                /><br />
                <button className="button justify-self-center mt-4" disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span className="text-black">Submit Notes</span>}
                </button>
            </form>
        )
        }
    
"use client"
import React, { useState } from 'react'

export default function AddNote(props: any) {
    const [formNote, setFormNote] = React.useState(
        {
            id: "",
            note: "",
            entry_date: ""
        }
    )
    const [isLoading, setIsLoading] = useState(false)

    const id = props.id

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
        const randomID = "contnote" + Math.floor(Math.random() * 1000000000).toString()
        formNote.id = randomID
        const nextDateIso = new Date(formNote.entry_date).toISOString();
        formNote.entry_date = nextDateIso
        try{
          fetch(`/api/contact/${id}/note`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(formNote),
          });
        setFormNote({
            id: "",
            note: "",
            entry_date: ""
        })
        setIsLoading(false)
    } catch (error){console.error(error)}
    }
        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="date"
                    required
                    id="entryDate" 
                    name="entry_date" 
                    onChange={handleChange}
                    value={formNote.entry_date}
                /><br />
                <input 
                    type="textarea"
                    required
                    placeholder='Add Notes Here'
                    onChange={handleChange}
                    name='note'
                    value={formNote.note}
                /><br />
                <button disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span>Submit Notes</span>}
                </button>
            </form>
        )
        }
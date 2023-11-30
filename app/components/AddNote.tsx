"use client"
import React, { useState } from 'react'

export default function AddNote({id, isLoading, onSub}) {
    const [formNote, setFormNote] = useState(
        {
            id: "",
            note: "",
            entry_date: ""
        }
    )

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
        onSub()
        console.log(isLoading)
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

        console.log(isLoading)
        setFormNote({
            id: "",
            note: "",
            entry_date: ""
        })
        } finally {onSub()}
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
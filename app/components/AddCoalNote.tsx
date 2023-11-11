"use client"
import React, { useState } from 'react'

export default function AddCoalNote(props: any) {
    const [formNote, setFormNote] = React.useState(
        {
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
        const lastDateIso = new Date(formNote.entry_date).toISOString();
        formNote.entry_date = lastDateIso
        try{
          fetch(`/api/coalition/${id}/note`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(formNote),
          });
        setFormNote({
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
    
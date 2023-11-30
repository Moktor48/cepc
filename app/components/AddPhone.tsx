"use client"
import React, { useState } from 'react'

export default function AddPhone({id, isLoading, onSub}) {
    const [formPhone, setFormPhone] = React.useState(
        {
            phone: ""
        }
    ) 

    const handleChange = (e: any) => {
        setFormPhone(prevFormPhone => {
            return {
                ...prevFormPhone,
                [e.target.name]: e.target.value
            }
        })
    }    
    async function handleSubmit(e: any) {
        e.preventDefault();

        try{
          fetch(`/api/contact/${id}/phone`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formPhone),
          })
        setFormPhone({phone: ""})

    } catch (error){console.error(error)}
    }
        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    required
                    placeholder='Phone Number'
                    onChange={handleChange}
                    name='phone'
                    value={formPhone.phone}
                /><br />
                <button disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span>Submit Phone Number</span>}
                </button>
            </form>
        )
        }

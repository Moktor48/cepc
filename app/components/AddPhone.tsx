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
            <form onSubmit={handleSubmit}  className="cont2 max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
                <p className="header block m-auto text-center text-4xl">Add Phone Number</p>
                <input
                    className="textbar mt-4 w-1/2" 
                    type="text"
                    required
                    placeholder='Phone Number'
                    onChange={handleChange}
                    name='phone'
                    value={formPhone.phone}
                /><br />
                <button className="button justify-self-center mt-4">
                Submit Phone Number
                </button>
            </form>
        )
        }

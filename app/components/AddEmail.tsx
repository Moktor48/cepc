"use client"
import { useState } from 'react'

export default function AddEmail({id, isLoading, onSub}) {
    const [formEmail, setFormEmail] = useState(
        {
            email: ""
        }
    )


    const handleChange = (e: any) => {
        setFormEmail(prevFormEmail => {
            return {
                ...prevFormEmail,
                [e.target.name]: e.target.value
            }
        })
    }    
    async function handleSubmit(e: any) {
        e.preventDefault();

        try{
          fetch(`/api/contact/${id}/email`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formEmail),
          });
        setFormEmail({email: ""})

    } catch (error){console.error(error)}
    }
        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    required
                    placeholder='Email Address'
                    onChange={handleChange}
                    name='email'
                    value={formEmail.email}
                /><br />
                <button disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span>Submit Email</span>}
                </button>
            </form>
        )
        }

"use client"
import { useState } from 'react'

export default function AddEmail(props: any) {
    const [formEmail, setFormEmail] = useState(
        {
            email: ""
        }
    )
    const [isLoading, setIsLoading] = useState(false)
    const id = props.id
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
        setIsLoading(true)
        try{
          fetch(`/api/contact/${id}/email`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formEmail),
          });
        setFormEmail({email: ""})
        setIsLoading(false)
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

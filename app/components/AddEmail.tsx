"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddEmail({id, isLoading, onSub}) {

    const router = useRouter()
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
        const response = await fetch(`/api/contact/${id}/email`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formEmail),
          })
        if (response.ok) {
        setFormEmail({email: ""})
        router.refresh()
        }
    }
        return(
            <form onSubmit={handleSubmit} className="cont2 max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
                <p className="header block m-auto text-center text-4xl">Add Email</p>
                <input 
                    className="textbar mt-4 w-1/2"
                    type="email"
                    required
                    placeholder='Email Address'
                    onChange={handleChange}
                    name='email'
                    value={formEmail.email}
                /><br />
                <button className="button justify-self-center mt-4" disabled={isLoading}>
                Submit Email
                </button>
            </form>
        )
        }

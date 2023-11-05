"use client"
import React, { useState } from 'react'

export default function AddPhone(props: any) {
    const [formPhone, setFormPhone] = React.useState(
        {
            phone: ""
        }
    ) 
    const [isLoading, setIsLoading] = useState(false)
    const id = props.id
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
        setIsLoading(true)
        try{
          fetch(`/api/contact/${id}/phone`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formPhone),
          })
          setFormPhone({phone: ""})
          setIsLoading(false)
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

/* Select box: The component should pull the id, first_name, last_name, sort by last_name,  and then make LN + ", " + FN into selectable options.
Once selected, that person will be the FK for the phone/email....combined query is used here

export default function AddPhone( { params }: {params: { id: string } }) {
*/
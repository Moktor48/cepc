"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'



export default function RegisterAccount() {
    const [formData, setFormData] = useState(
        {username: "", email: "", password: "", rePassword: ""}
    )
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()



    async function handleChange(e: any) { 
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    
    async function handleSubmit(e: any) {
        e.preventDefault();
        setIsLoading(true)
        if(!formData.password){
            alert("Enter a password")
        } else if (!formData.rePassword){
            alert("Confirm your password")
        } else if (formData.password.length < 6){
            alert("Provide at least 6 characters")
        } else if(formData.password != formData.rePassword){
            alert("Passwords must match")
        } else if (!formData.username){
            alert("Enter a username")
        } else if (!formData.email){
        } else {

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({formData})
        })
        setIsLoading(false)
        const userInfo = await response.json()
        console.log(userInfo)
        //router.push('/api/auth/signin')
    }
    }


        return(
            <form className="container max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md" onSubmit={handleSubmit}>
            <p className="header block m-auto text-center text-4xl">Register Account</p><br />
               
                
                <input 
                    className="fn mt-4"
                    type="text"
                    required
                    placeholder='Username'
                    onChange={handleChange}
                    name='username'
                    autoComplete='new-username'
                    value={formData.username}
                /><br />
                <input 
                    className="ln"
                    type="email"
                    required
                    placeholder='Email'
                    onChange={handleChange}
                    name='email'
                    autoComplete='new-email'
                    value={formData.email}
                /><br />
                <input 
                    className="org"
                    type="password"
                    required
                    placeholder='Password'
                    onChange={handleChange}
                    name='password'
                    autoComplete='new-password'
                    value={formData.password}
                /><br />
                <input 
                    className="title"
                    type="password"
                    placeholder='Re-enter Password'
                    onChange={handleChange}
                    name='rePassword'
                    autoComplete='new-password'
                    value={formData.rePassword}
                /><br />


                <button className="button justify-self-center mt-4" disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span className="text-black bg-yellow-200">Submit Registration</span>}
                </button>
            </form>
        )
}
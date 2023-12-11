"use client"
import React, { useState } from 'react'
import bcrypt from 'bcrypt'


export default function RegisterAccount() {
    const [formData, setFormData] = useState(
        {username: "", password: "", rePassword: ""}
    )
    const [isLoading, setIsLoading] = useState(false)
    const bcrypt = require('bcrypt')
    const saltRounds = 12


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
        if(!formData.password){
            alert("Enter a password")
        } else if (!formData.rePassword){
            alert("Confirm your password")
        } else if (formData.password.length < 6){
            alert("Provide at least 6 characters")
        } else if(formData.password != formData.rePassword){
            alert("Passwords must match")
        } else {

        setIsLoading(true)
        console.log(formData)
        const hash = await bcrypt.hash(formData.password, saltRounds)
        formData.password = hash

        formData.rePassword = ""
        console.log(formData)
        try {
          fetch('/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          setFormData({username: "", password: "", rePassword: ""})
          setIsLoading(false)

        } catch (error){console.error(error)
        }
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
                    value={formData.username}
                /><br />
                <input 
                    className="ln"
                    type="password"
                    required
                    placeholder='Password'
                    onChange={handleChange}
                    name='password'
                    value={formData.password}
                /><br />
                <input 
                    className="org"
                    type="password"
                    placeholder='Re-enter Password'
                    onChange={handleChange}
                    name='rePassword'
                    value={formData.rePassword}
                /><br />


                <button className="button justify-self-center mt-4" disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span className="text-black bg-yellow-200">Submit Registration</span>}
                </button>
            </form>
        )
}
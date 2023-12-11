"use client"
import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function NavBar() {

  const router = useRouter()

  return (
    <div className='flexCont inline-flex bg-gradient-to-r from-indigo-500'>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/">Home</Link></p>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/person">Contacts</Link></p>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/coalition">Coalitions</Link></p>
    </div>
  )
}

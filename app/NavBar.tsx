"use client"
import Link from 'next/link'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function NavBar() {
  const { data: session, status } = useSession()
  const [login, setLogin] = useState(false)

  useEffect(() => {
    if (session) setLogin(true)
  }, [session])
  console.log(session)
  return (
    <div className='flexCont inline-flex bg-gradient-to-r from-indigo-500'>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/">Home</Link></p>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/dashboard">Dashboard</Link></p>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/person">Contacts</Link></p>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/coalition">Coalitions</Link></p>
        {login && <p className='items-end mx-5 flex-row-reverse'><Link href="/api/auth/signout">Logout</Link></p>}
        {login && <p className='items-end mx-5 flex-row-reverse'>{session?.user?.username} is logged in</p>}
        {!login && <p className='items-end mx-5 flex-row-reverse'><Link href="api/auth/signin">Login</Link></p>}        
    </div>
  )
}


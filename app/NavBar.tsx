import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className='container inline-flex bg-gradient-to-r from-indigo-500'>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/">Home</Link></p>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/person">Contacts</Link></p>
        <p className='items-end mx-5 flex-row-reverse'><Link href="/coalition">Coalitions</Link></p>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/person">Contacts</Link>
        <Link href="/coalition">Coalitions</Link>
    </div>
  )
}

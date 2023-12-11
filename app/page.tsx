import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
        <Link href="/register">Register for a new account</Link><br />
        <Link href="/api/auth/signin">Log-In</Link>
    </div>
  )
}

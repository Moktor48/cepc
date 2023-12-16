import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="contFlex max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
        <Link href="/login"><button className="button justify-self-center my-4">Log-In</button></Link>
    </div>
  )
}

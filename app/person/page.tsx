"use client"
import Dialog from '../components/Dialog'
import ContactDue from '../components/ContactDue'
import EnterContact from '../components/EnterContact'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from "next/navigation"
export default function AllContacts() {
  const router = useRouter()
  const [shareState, setShareState] = useState(false)

  function onClose() {
    setShareState(!shareState)
    router.push("/person")
  }

  return (
    <div className="flexCon flex-col justify-center max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
        <h1 className="text-center text-4xl m-4">Contact Page</h1>
        <ContactDue 
          shareState={shareState}
        />
        <Link className="flex justify-center"href="/person?showDialog=y"><button className="m-4">Enter a Contact</button></Link>
        <Dialog onClose={onClose}>
            <EnterContact />
            </Dialog>
    </div>
  )
}


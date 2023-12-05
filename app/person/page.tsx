import Dialog from '../components/Dialog'
import ContactDue from '../components/ContactDue'
import EnterContact from '../components/EnterContact'
import Link from 'next/link'

export default function AllContacts() {
  async function onClose() {
    "use server"
  }

  async function onOk() {
    "use server"
  }

  return (
    <div className="flexCon flex-col justify-center max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
        <h1 className="text-center text-4xl m-4">Contact Page</h1>
        <ContactDue />
        <Link className="flex justify-center"href="/person?showDialog=y"><button className="m-4">Enter a Contact</button></Link>
        <Dialog onClose={onClose} onOk={onOk}>
            <EnterContact />
            </Dialog>
    </div>
  )
}


import Dialog from '../components/Dialog'
import ContactDue from '../components/ContactDue'
import EnterContact from '../components/EnterContact'

export default function AllContacts() {
  async function onClose() {
    "use server"
  }

  async function onOk() {
    "use server"
  }

  return (
    <div>
        <h1>Contacts</h1>
        <ContactDue />
        <Dialog title="Enter Contact Information" onClose={onClose} onOk={onOk}>
            <EnterContact />
            </Dialog>
    </div>
  )
}


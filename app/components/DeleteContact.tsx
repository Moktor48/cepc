"use client"
import { useRouter } from "next/navigation"
export default function DeleteContact({idx}){
  const router = useRouter()
  const id = idx
  async function handleDelete(e: any){
    e.preventDefault()
    const response = await fetch(`/api/contact/${id}`, 
      {method: 'DELETE',}
      ) 
    if (response.ok) {
      router.push("/person")
    }
  }
  return (
    <div>
        <button onClick={handleDelete}>
            Delete Contact
        </button>
    </div>
  )
}

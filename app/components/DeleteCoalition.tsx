"use client"
import { useRouter } from "next/navigation"
export default function DeleteCoalition({idx}){
  const router = useRouter()
  const id = idx
  async function handleDelete(e: any){
    e.preventDefault()
    const response = await fetch(`/api/coalition/${id}`, 
          {method: 'DELETE',}
        )
    if (response.ok){
      router.push("/coalition")
    }
  }
  
  return (
    <div>
        <button onClick={handleDelete}>
            Delete Coalition
        </button>
    </div>
  )
}
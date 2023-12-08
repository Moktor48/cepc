"use client"
import { useRouter } from "next/navigation"

export default function PhoneData({id, phone}) {
  const router = useRouter()
  async function handleClick() {

  const response = await fetch(`/api/contact/${[id]}/phone/${[phone]}`, {
        method: 'DELETE',
      })
      if (response.ok){
        router.refresh()
      }
    } 

  return (
        <span className="block">{phone}  <button onClick={handleClick} className="button-clear text-red-600">X</button></span>
  )
}
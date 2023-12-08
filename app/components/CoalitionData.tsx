"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CoalitionData({coalition_id, Coalition, contact_id, junc}) {
  const router = useRouter()
  
  async function handleClick() {
    const found = junc.find((contact_id, coalition_id) => contact_id && coalition_id)
    const id = found.id

      const response = await fetch(`/api/junction/${[id]}`, {
        method: 'DELETE',
      })

      if (response.ok){
        router.refresh()
      }
    }
  
  return (

        <span className="block"><Link href={`/coalition/${coalition_id}`}>{Coalition}</Link>  <button  onClick={handleClick} className="button-clear text-red-600">X</button></span>

  )
}

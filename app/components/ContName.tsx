"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ContName({id, fname, lname, junc, coalition_id}) {
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
    <div className="">
      <span className=""><Link href={`/person/${id}`}><p className="max-w-es">{fname} {lname}</p></Link> <button className="button-clear text-red-500 text-sm" onClick={handleClick}>Remove Member</button></span>
    </div>
  )
}

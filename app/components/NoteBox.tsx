"use client"
import { useRouter } from "next/navigation"

export default function NoteBox({id, enType, conID, entry, note}) {
  const [Nex, a, b] = entry.toISOString().split('T')
  const router = useRouter()
  async function handleClick() {
    const response = await fetch(`/api/${[enType]}/${[conID]}/note/${[id]}`, {
        method: 'DELETE',
      })
      if (response.ok){
        router.refresh()
      }
    }
  
  return (
    <div className="flexCon max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
        <span className="flexCon">Date: {Nex}  <button onClick={handleClick} className="justify-end button-clear text-red-600 text-right">X</button></span>
        <p>Note: {note}</p>
    </div>
  )
}

"use client"

export default function NoteBox({id, enType, conID, entry, note}) {
  const [Nex, a, b] = entry.toISOString().split('T')
  function handleClick() {
    console.log(`/api/${[enType]}/${[conID]}/note/${[id]}`)
    try {
      fetch(`/api/${[enType]}/${[conID]}/note/${[id]}`, {
        method: 'DELETE',
      })
    } finally {
  
    }
  }
  return (
    <div className=" max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
        <span>Date: {Nex}  <button onClick={handleClick} className="text-red-600">X</button></span>
        <p>Note: {note}</p>
    </div>
  )
}

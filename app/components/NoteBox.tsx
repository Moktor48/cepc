// Literally just a div to place the note return, should be general use, use params to differentiate

export default function NoteBox({entry, note}) {
  const [Nex, a, b] = entry.toISOString().split('T')
  return (
    <div className="bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
        <p>Date: {Nex}</p>
        <p>Note: {note}</p>
    </div>
  )
}

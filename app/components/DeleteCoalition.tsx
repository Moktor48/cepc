"use client"
export default function DeleteCoalition({idx}){
        const id = idx
        async function handleDelete(e: any){
        e.preventDefault()
                    try {
                      fetch(`/api/coalition/${id}`, 
                      {method: 'DELETE',}
                      )} 
                      catch (error){console.error(error)
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
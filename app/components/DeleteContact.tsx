"use client"
export default function DeleteContact({idx}){
        const id = idx
        async function handleDelete(e: any){
        e.preventDefault()
                    try {
                      fetch(`/api/contact/${id}`, 
                      {method: 'DELETE',}
                      )} 
                      catch (error){console.error(error)
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

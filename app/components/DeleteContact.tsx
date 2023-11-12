"use client"
export default function DeleteContact({idx}){

        const id = idx
    
        async function handleDelete(e: any){
        e.preventDefault()
                    try {
                        fetch(`/api/contact/${id}/note`, 
                        {method: 'DELETE',}
                        )} 
                        catch (error){console.error(error)
                        }
                    try {
                      fetch(`/api/contact/${id}/email`, 
                      {method: 'DELETE',}
                      )} 
                      catch (error){console.error(error)
                      }
                    try {
                      fetch(`/api/contact/${id}/phone`, 
                      {method: 'DELETE',}
                      )} 
                      catch (error){console.error(error)
                      }
                    try {
                      fetch(`/api/junction/${id}`, 
                      {method: 'DELETE',}
                      )} 
                      catch (error){console.error(error)
                      }
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

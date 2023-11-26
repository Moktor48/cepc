"use client"
import React from 'react'
import Link from 'next/link'


export default function CoalitionData({ID, Coalition, conID, junc}) {
    const juncData = junc
    const found = juncData.find((contact_id, coalition_id) => contact_id == conID && coalition_id == ID)
    console.log(found)
/*
    function handleClick() {
        try {
          fetch(`/api/junction/${found}`, {
            method: 'DELETE',
          })
        } finally {
      
        }
      }
*/


        return (
        <div>
            <span><Link href={`/coalition/${ID}`}>{Coalition}</Link>  <button  className="text-red-600">X</button></span>
        </div>

        )
}



/*
onClick={handleClick}

"use client"
import React from 'react'

export default function PhoneData({id, phone}) {
  function handleClick() {
    try {
      fetch(`/api/contact/${[id]}/phone/${[phone]}`, {
        method: 'DELETE',
      })
    } finally {
  
    }
  }

  return (
    <div>
        <span>{phone}  <button onClick={handleClick} className="text-red-600">X</button></span>
    </div>
  )
}

junc =  [
    {
        id:
        contact_id:
        coalition_id:
    }
]           
            contact_id: conID,
            coalition_id: ID

const found = juncData.find((id) => contact_id == conID && coalition_id == ID)

*/
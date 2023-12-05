"use client"
import React from 'react'
import Link from 'next/link'



export default function CoalitionData({ID, Coalition, conID, junc}) {

  const found = junc.find((contact_id, coalition_id) => contact_id == conID && coalition_id == ID)
  const id = junc.id
  console.log(junc)
  console.log(found)
  function handleClick() {

    try {
      fetch(`/api/junction/${[id]}}`, {
        method: 'DELETE',
      })
    } finally {
  
    }
  }



        return (
        <div>
            <span><Link href={`/coalition/${ID}`}>{Coalition}</Link>  <button  onClick={handleClick} className="text-red-600">X</button></span>
        </div>

        )
}

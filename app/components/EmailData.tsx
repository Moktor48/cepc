"use client"
import React from 'react'

export default function EmailData({id, email}) {
  function handleClick() {
    try {
      fetch(`/api/contact/${[id]}/email/${[email]}`, {
        method: 'DELETE',
      })
    } finally {
  
    }
  }
  return (

    <div>
        <span>{email}  <button onClick={handleClick} className="text-red-600">X</button></span>
    </div>
  )
}

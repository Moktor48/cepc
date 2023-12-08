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
        <span className="block">{email}  <button onClick={handleClick} className="button-clear text-red-600">X</button></span>
  )
}

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

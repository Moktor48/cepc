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
    <div className="max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
        <span>{phone}  <button onClick={handleClick} className="text-red-600">X</button></span>
    </div>
  )
}
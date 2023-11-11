"use client"
import { useState, useEffect, useRef } from "react";

export default function CoalitionSelect({id}){
const [isLoading, setIsLoading] = useState(false)
const [formData, setFormData] = useState({contact_id: parseInt(id), coalition_id: 0})
const [coalData, setCoalData] = useState([])
const [value, setValue] = useState("")

useEffect(() => {
    setIsLoading(true)
    fetch("/api/coalition")
    .then((res) => res.json())
    .then((data) => {
        setCoalData(data)
        setIsLoading(false)
    })
  }, []);

function SelOpt({id, name}){
    return(
        <option value={id} id={id}>{name}</option>
    )
  }

  async function handleChange(e: any) {
    setValue(e.target.value) 
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            coalition_id: parseInt(e.target.value)

        }
    })
}

async function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true)
    //const a = parseInt(id)
    //const b = parseInt(value)
    //console.log(a, b)
    setFormData({contact_id: id, coalition_id: value})
    console.log(formData)
    try {
      fetch('/api/junction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      setFormData({contact_id: parseInt(id), coalition_id: 0})
      setIsLoading(false)
    } catch (error){console.error(error)
    }
}
    return(
        <form onSubmit={handleSubmit}>
            <select value={value} onChange={handleChange}>
            {coalData.map((data: any) => (
                <SelOpt                 
                key={data.id}
                id={data.id}
                name={data.name}
                />))}
            </select>
            <button type="submit" disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span>Add Coalition</span>}
            </button>
        </form>
    )
}

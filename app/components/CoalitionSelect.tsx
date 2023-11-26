"use client"
import { useState, useEffect, useRef } from "react";

export default function CoalitionSelect({id}){
const [isLoading, setIsLoading] = useState(false)
const [formData, setFormData] = useState({id: "", contact_id: "", coalition_id: ""})
const [coalData, setCoalData] = useState([])
const [value, setValue] = useState("choose")

const contID = id
const randomID = "junc" + Math.floor(Math.random() * 1000000000).toString()
useEffect(() => {
    setIsLoading(true)
    fetch("/api/coalition")
    .then((res) => res.json())
    .then((data) => {
        setCoalData(data)
        setIsLoading(false)
    })
  }, []);

function SelOpt({clid, name}){
    return(
        <option value={clid} id={clid}>{name}</option>
    )
  }

async function handleChange(e: any) {
    setValue(e.target.value) 
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            id: randomID,
            contact_id: contID,
            coalition_id: e.target.value
        }
    })
}

async function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true)
    console.log(formData)
    try {
      fetch('/api/junction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      setFormData({id: "", contact_id: "", coalition_id: ""})
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
                clid={data.id}
                name={data.name}
                />))}
                <option disabled value='choose' id="89769876">Choose...</option>
            </select>
            <button type="submit" disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span>Add Coalition</span>}
            </button>
        </form>
    )
}

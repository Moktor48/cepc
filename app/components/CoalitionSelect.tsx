"use client"
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CoalitionSelect({id}){
const [isLoading, setIsLoading] = useState(false)
const [formData, setFormData] = useState({id: "", contact_id: "", coalition_id: ""})
const [coalData, setCoalData] = useState([])
const [value, setValue] = useState("choose")
const router = useRouter()
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

    const response = await fetch('/api/junction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
      setFormData({id: "", contact_id: "", coalition_id: ""})
      setIsLoading(false)
      router.refresh()
    } 
}
    return(
        <form className="flexCon flex_col text-yellow-500" onSubmit={handleSubmit}>
            <select className="text-yellow-500 bg-black" value={value} onChange={handleChange}>
            {coalData.map((data: any) => (
                <SelOpt                 
                key={data.id}
                clid={data.id}
                name={data.name}
                />))}
                <option className="text-yellow-500" disabled value='choose' id="89769876">Choose...</option>
            </select>
            <button className="button" type="submit" disabled={isLoading}>
                {isLoading && <span>Submitting...</span>}
                {!isLoading && <span>Add Coalition</span>}
            </button>
        </form>
    )
}

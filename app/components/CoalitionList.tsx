"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

function CoalitionData({id, Coalition}) {
    return(
        <div className="flex flexCon justify-center">
            <h2><Link href={`/coalition/${id}`}>{Coalition}</Link></h2>
        </div>
    )
}

export default function CoalitionTable(shareState) {
    const [cont, setCont] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch("/api/coalition")
        .then((res) => res.json())
        .then((data) => {
            setCont(data)
            setLoading(false)
        })
      }, [shareState]);

      if (isLoading) return <p>Loading...</p>
      if (!cont) return <p>No data</p>

      return(
        <div>
            {cont.map((dat: any) => (
                    <CoalitionData
                        key={dat.id}
                        id={dat.id}
                        Coalition = {dat.name}
                    />
                    ))}
        </div>
        )
    }

    /*
    
    
    */
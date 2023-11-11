import React from 'react'
import Link from 'next/link'


export default function CoalData({ID, Coalition, P1, P2, P3, Phase, LasCon, NexCon}) {
    const [Nex, a, b] = NexCon.toISOString().split('T')
    const [Las, c, d] = LasCon.toISOString().split('T')
        return (
        <div>
            <h1>{Coalition}</h1>
            <p>Priorities: {P1 ? "Priority 1" : null}{P2 ? "Priority 2" : null}{P3 ? "Priority 3" : null}</p>
            <p>Phase: {Phase}</p>
            <p>Last Contact: {Las}</p>
            <p>Next Contact: {Nex}</p>
        </div>
        )
}








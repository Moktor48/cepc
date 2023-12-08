import React from 'react'
import Link from 'next/link'


export default function CoalData({ID, Coalition, P1, P2, P3, Phase, LasCon, LCT, NexCon, NCT}) {
    const [Nex, a, b] = NexCon.toISOString().split('T')
    const [Las, c, d] = LasCon.toISOString().split('T')
        return (
        <div className="max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            <h1 className="text-4xl text-center" >{Coalition}</h1><br />
            <p>Priorities: {P1 ? "Priority 1, " : null}{P2 ? "Priority 2, " : null}{P3 ? "Priority 3" : null}</p>
            <p>Phase: {Phase}</p>
            <p>Last Contact: {Las} via {LCT}</p>
            <p>Next Contact: {Nex} via {NCT}</p>
        </div>

        )
}








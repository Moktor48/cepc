"use client"
import CoalitionTable from "../components/CoalitionList";
import Dialog from "../components/Dialog";
import EnterCoalition from "../components/EnterCoalition";
import Link from "next/link";
import { useState } from "react";

export default function Page() {

      const [shareState, setShareState] = useState(false)

      function onClose() {
        setShareState(!shareState)
      }

    return(
        <div className="flexCon flex-col justify-center max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            <h1 className="text-center text-4xl m-4">Coalitions Page</h1>
              <CoalitionTable 
                shareState={shareState}
              />
                <Link className="flex justify-center" href="/coalition?showDialog=y"><button className="m-4">Enter a Coalition</button></Link>
              <Dialog onClose={onClose}>
                <EnterCoalition />
              </Dialog>
        </div>
        )
}

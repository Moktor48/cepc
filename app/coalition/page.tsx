"use client"
import CoalitionTable from "../components/CoalitionList";
import Dialog from "../components/Dialog";
import EnterCoalition from "../components/EnterCoalition";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"
export default function Page() {
      const router = useRouter()
      const [shareState, setShareState] = useState(false)
      function onClose() {
        setShareState(!shareState)
        router.push("/coalition")
      }

    return(
        <div className="flexCon flex-col justify-center max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            <h1 className="text-center text-4xl m-4">Coalitions Page</h1>
              <CoalitionTable 

              />
                <Link className="flex justify-center" href="/coalition?showDialog=y"><button className="m-4">Enter a Coalition</button></Link>
              <Dialog onClose={onClose}>
                <EnterCoalition />
              </Dialog>
        </div>
        )
}

/*


*/
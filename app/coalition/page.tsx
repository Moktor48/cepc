import CoalitionTable from "../components/CoalitionList";
import Dialog from "../components/Dialog";
import EnterCoalition from "../components/EnterCoalition";
import Link from "next/link";

export default function Page() {
    async function onClose() {
        "use server"
      }
    
      async function onOk() {
        "use server"
      }
    return(
        <div className="flexCon flex-col justify-center max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            <h1 className="text-center text-4xl m-4">Coalitions Page</h1>
              <CoalitionTable />
                <Link className="flex justify-center" href="/coalition?showDialog=y"><button className="m-4">Enter a Coalition</button></Link>
              <Dialog onClose={onClose} onOk={onOk}>
                <EnterCoalition />
              </Dialog>
        </div>
        )
}

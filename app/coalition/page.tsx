import CoalitionTable from "../components/CoalitionList";
import Dialog from "../components/Dialog";
import EnterCoalition from "../components/EnterCoalition";

export default function Page() {
    async function onClose() {
        "use server"
      }
    
      async function onOk() {
        "use server"
      }
    return(
        <div>
            <h1>Coalitions Page</h1>
                <CoalitionTable />
                <Dialog title="Enter Contact Information" onClose={onClose} onOk={onOk}>
            <EnterCoalition />
            </Dialog>
        </div>
        )
}

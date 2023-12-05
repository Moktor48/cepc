
import Link from "next/link"
import ContactPriority from "./components/ContactPriority"

export default function App () {

    return(
        <div className="max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            <h1 className="text-center m-4 text1 text-4xl">CEPC Contact Tracking</h1>
            <ContactPriority />
        </div>

    )
};

/* The page will make an alert IF !next_contact && a month has passed last_contact || IF next_contact date is nearing 1 day out
Components:
Link buttons

*/
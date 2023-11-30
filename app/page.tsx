
import Link from "next/link"
import ContactPriority from "./components/ContactPriority"

export default function App () {

    return(
        <div>
            <ContactPriority />
            <Link href="/person?showDialog=y">Enter a Contact</Link>
            <Link href="/coalition?showDialog=y">Enter a Coalition</Link>



        </div>

    )
};

/* The page will make an alert IF !next_contact && a month has passed last_contact || IF next_contact date is nearing 1 day out
Components:
Link buttons

*/
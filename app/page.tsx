
import ContactDue from "./components/ContactDue"
import EnterContact from "./components/EnterContact"




export default function App () {

    return(
        <div>
            <ContactDue />
            <EnterContact />
        </div>

    )
};

// The page will make an alert IF !next_contact && a month has passed last_contact || IF next_contact date is nearing 1 day out
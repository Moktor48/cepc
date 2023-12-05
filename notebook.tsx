function ContactTable({ID, FirstName, LastName, Org}) {

    return(   
        <tr key={ID.toString()}>
            <td key={ID.toString() + "fnln"}><Link href={`/person/${ID}`}>{FirstName + " " + LastName}</Link></td>
            <td key={ID.toString() + "org"}>{Org}</td>
            {/*PLACEHOLDER for coalition link-up*/}
        </tr>
    )
}

function CoalitionData(id, Coalition) {
    return(
        <tr>
            <td><Link href={`/coalition/${id}`}>{Coalition}</Link></td>
        </tr>
    )
}
/*

ROOT-

app

    API-
    api

    PAGES-
    coalition
        Dynamically create a page with Coalition data to include:
            Name
            Members
                Ability to read/add/subtract
            Notes
                Ability to read/add/subtract
    person
        Dynamically create a page with contact data to include
            |-Name
         DB-| Org
            |-Last and future contact dates and methods
         DB-|-Phone
         DB-|-Email
         DB-| Coalition
         DB-| Notes
                Ability to CRUD all 

    SUPPORT-
    components

    ORM-
    prisma

PERSON page
Dynamic path: /app/person/[id]/page.tsx
I need to generate the page using the dynamic path through the link from the main page (COMPLETE)

/app/page.tsx: Link from chosen name= id => (COMPLETE)

dynamic page which should query the full DB (contact/notes/phone (COMPLETE)/email/junction/coalition)

This is where I save static params to pass to phone/email/notes <this is what I need the static for>

Those params will be used to pass the cont_id_xxxx to allow entry of notes, emails, and phone numbers as well as editing the contact.

DATA ENTRY
    ADD: A success/failure notification that the data was sent
    ADD: Refresh page on submit

    Steps:  OnClick,
            When filled out wrong, red outline, message Missing Info
            When filled out correctly, form submits and gives Success message while clearing the form

DATA MANIPULATION
    Deleting contacts:
    1) On Contact Page (delete button with confirmation prompt)

    Modifying contacts:
    1) Patch request on contact page. (Change button? Checkboxes?)

WTF is happening with my GET request for findMany on cont_note?

ADMIN PAGE ALERTS
    Check database for contacts that have 1 to 7 days before their "next contact" listed in order closest date to farthest
    Check DB for "next" = today (Warning for meeting) SECOND-TOP of list
    Check DB for "next" AFTER today (Warning for overdue) TOP of list
    So... 
        Pull all contacts
        Order all contacts by next date
        Compare to "Date" and loop into table?
        Link names to save adding contact info


Step 1: Get the static parameters on the PERSON page
Step 2: Pass those params to the 3 queries
Step 3: ??
Step 4: Profit!


API MESS

Contact POST general, GET all
    [id] get one, put, patch, delete
        phone post specific, GET all for [id]
            [phone] get one, put, patch, delete
        email post specific, get all for [id]
            [email] get one, put, patch, delete
        note post specific, get all for [id]
            [contnoteid] get one, put, patch, delete
Coalition post general,get all
    [name] get one, put, patch, delete
        note post specific, get all for [name]
            [coalnoteid] get one, put, patch, delete
Combined post specific, get all
    [id] get one, put, patch, delete

PRIORITY
    When needed, parse out
    1, 2, 3, 12, 13, 23, 123


FUCK YOU TIMES
    Append T23:59:59.999Z




Look at Jan/BC/Compact

Connecting:
Current Coalitions (Glendale, Buckeye, UHS, Clinical)
Pending Coalitions (Stores, Colleges, Maricopa PH)
VA (VCP, ELT, SPC)








const [isChecked, setIsChecked] = useState(false)

const handleClick = () => {
    setIsChecked(!isChecked)
}

{ isChecked ? true : false }

LINKING Coalitions and Contacts

On individual contact page:
"Add Coalition" (submit/entry component)
Pull Coalitions > Dropdown menu > submit = Coalition ID (selction) and Contact ID (params from page) to POST to the JUNCTION table
Add a "coalition" output, query-JOIN through JUNCTION and COALITION and output coalitions

On Coalition page:
Add a "Members" output, query-JOIN through JUNCTION and COALITION and output members from contacts 



Contact Deletion, lol:
findUnique: contact: id (PK)
findMany: note: contact_id (FK)
findMany: phone: contact_id_phone (FK)
findMany: email: contact_id_email (FK)
findMany: junction: contact_id (FK)

random keys:
onSubmit: 
    const randomID = "contact" + Math.floor(Math.random() * 1000000000).toString()

contact done
coalition done
junction done
contact note done
coalition note done

Fix API
Every POST request must include new random ID
contact
contact[id]note../email/phone
coalition
coalition[id]note
junction
const randomID = "contact" + Math.floor(Math.random() * 1000000000).toString()

DATES:

MODALS
@modals/parallel routes
modal pop-ups for data entry

const vanilla = () => {
if(problem){
    const yo = !problem
    for (let i = problem.count; i = yo, i--) {
        problem ? yo | solvedIt;
    }
    console.log("I solved it")
}
}
*/


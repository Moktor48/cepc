




function ContactReturn({FirstName, LastName, Organization, NextContact, NextContactType}){
    return(

                    <tr>
                        <td>{FirstName + " " + LastName}</td>
                        <td>{Organization}</td>
                        <td>{NextContact}</td>
                        <td>{NextContactType}</td>
                    </tr>


    )
}


async function fetchData() {

    try{
        fetch('/api/contact')
  } catch (error){console.error(error)}
  }


export default async function ContactDue() {
    const cont = fetchData();

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Organization</th>
                    <th>Last Contact</th>
                    <th>Next Contact</th>
                    <th>Next Contact Type</th> {/*Include date and whether it is set (true) or follow-up (false)*/}
                </tr>
            </thead>
            <tbody>
                {
                    cont.map((con) => {
                        return(                
                <ContactReturn
                    key={con.id}
                    FirstName={con.first_name}
                    LastName={con.last_name}
                    Organization={con.org}
                    NextContact={con.next_contact}
                    NextContactType={con.next_con_type}
                    />
                        )
                })
            }
            </tbody>
        </table>
    )
}







/*
End result-
Name            Org         Last Contact            Next Contact
Person          theirJob    asWritten               Either 1 month after LastContact or as set appointment

Query should order results with nearest next contact date at the top
Style queries so that everything in the upcoming week is highlighted/more visible
Click-on query/link to bring to notes page where you can see all contact info and enter notes
Checkbox for completed contact, and alerts for past-due contacts
toMany database for dates, will track all contact dates and will allow the checkbox to remove entries from query

GET all your records... array? Build a function to deconstruct the array and push the contents into the TD elements


*/
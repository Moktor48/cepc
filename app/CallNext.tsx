export default function CallNext() {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th> {/*Combine First + Last*/}
                        <th>Organization</th>
                        <th>Last Contact</th>
                        <th>Next Contact</th> {/*Include date and whether it is set (true) or follow-up (false)*/}
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
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




*/
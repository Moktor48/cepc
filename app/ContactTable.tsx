

export default function ContactTable({ID, FirstName, LastName, Org, LasCon, NexCon, NexConTyp}) {
    return(
        <tr key={ID}>
            <td>{FirstName + " " + LastName}</td>
            <td>{Org}</td>
            <td>{LasCon}</td>
            <td>{NexCon}</td>
            <td>{NexConTyp}</td>
        </tr>
    )
}
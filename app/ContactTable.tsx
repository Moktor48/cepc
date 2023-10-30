

export default function ContactTable({ID, FirstName, LastName, Org, LasCon, NexCon, NexConTyp}) {
    return(
        <tr key={ID.toString()}>
            <td key={ID.toString() + "fnln"}>{FirstName + " " + LastName}</td>
            <td key={ID.toString() + "org"}>{Org}</td>
            <td key={ID.toString() + "lcon"}>{LasCon}</td>
            <td key={ID.toString() + "ncon"}>{NexCon}</td>
            <td key={ID.toString() + "ncot"}>{NexConTyp}</td>
        </tr>
    )
}
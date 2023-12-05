import Link from "next/link"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient

function ContactTable({ID, FirstName, LastName, NexCon}) {
    const [Nex, a, b] = NexCon.toISOString().split('T')
    return(
        
        <tr key={ID.toString()}>
            <td key={ID.toString() + "fnln"}><Link href={`/person/${ID}`}>{FirstName + " " + LastName}</Link></td>
            <td key={ID.toString() + "ncon"}>{Nex}</td>
        </tr>
    )
}

async function overDue() {
    const nD = new Date

    const overdueTime = await prisma.contact.findMany({
        where: {
            next_contact: {
                lt: nD
            },
        },
        orderBy: {
              next_contact: 'asc'
            },
    })
    return overdueTime
}

async function soonDue() {
    const nDx = new Date
    const nD = new Date
    const sevDatex = nD.setDate(nD.getDate() + 7)
    const sevDate = new Date(sevDatex)
    const soonDueTime = await prisma.contact.findMany({
        where: {
            next_contact: {
                gt: nDx,
                lte:sevDate
            },
        },
        orderBy: {
              next_contact: 'asc'
            },
    })
    return soonDueTime
}

export default async function ContactPriority() {

const overDueA = await overDue()
const warnDue = await soonDue()

  return (
    <div className="grid-flow-col cont3 justify-center">
            <table className="tab1">
                <thead>
                    <tr><th className="text-2xl text-red-500" colSpan={2}>Priority Contacts!</th></tr>
                    <tr>
                        <th>Name</th>
                        <th>Next Contact</th>
                    </tr>
                </thead>
                <tbody>
                {overDueA.map(con => (
                    <ContactTable
                        key={con.id}
                        ID={con.id}
                        FirstName={con.first_name}
                        LastName={con.last_name}
                        NexCon={con.next_contact}
                    />)
                )}
           </tbody>
            </table>
            <br /><br />
            <table className="tab2 mb-8">
                <thead>
                    <tr><th className="text-2xl text-green-500" colSpan={2}>Due in the next week</th></tr>
                    <tr>
                        <th>Name</th>
                        <th>Next Contact</th>
                    </tr>
                </thead>
                <tbody>
                {warnDue.map(con => (
                    <ContactTable
                        key={con.id}
                        ID={con.id}
                        FirstName={con.first_name}
                        LastName={con.last_name}
                        NexCon={con.next_contact}
                    />)
                )}
                </tbody>
            </table>
    </div>
  )
}
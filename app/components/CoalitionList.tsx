import Link from "next/link"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient


function CoalitionData({id, Coalition}) {
    return(
            <h2><Link href={`/coalition/${id}`}>{Coalition}</Link></h2>
    )
}

export default async function CoalitionTable() {
    const cont = await prisma.coalition.findMany()

      return(
        <div>
            {cont.map((dat: any) => (
                    <CoalitionData
                        key={dat.id}
                        id={dat.id}
                        Coalition = {dat.name}
                    />
                    ))}
        </div>
        )
    }

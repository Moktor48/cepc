import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient



function SelOpt({id, name}){
  return(
      <option value={id}>{name}</option>
  )
}

export default async function ConCoalSubmit() {
  const CoalData = await prisma.coalition.findMany()
  return(
    <select>
    {CoalData.map((data: any) => (
        <SelOpt                 
        key={data.id}
        id={data.id}
        name={data.name}
        />))}
    </select>
  )
}






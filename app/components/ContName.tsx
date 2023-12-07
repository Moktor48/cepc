import Link from "next/link"
export default function ContName({id, fname, lname}) {
  return (
    <div>
    <Link href={`/person/${id}`}><p>{fname} {lname}</p></Link>
    </div>
  )
}

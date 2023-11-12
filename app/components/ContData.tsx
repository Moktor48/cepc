export default function ContData({id, fname, lname, org, lcont, ncont, ltype, ntype}){
    const [Nex, a, b] = ncont.toISOString().split('T')
    const [Las, c, d] = lcont.toISOString().split('T')
    return(
        <div>
            <h1>{fname} {lname}</h1>
            <p>Organization: {org}</p>
            <p>The last contact occured on {Las} by {ltype}</p>
            <p>The next contact is scheduled for {Nex} by {ntype}</p>
        </div>
    )
}
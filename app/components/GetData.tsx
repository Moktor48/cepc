export async function GetUser(id: string) {
    const response = await fetch(`http://localhost:3000/api/contact/${id}`)
    return response.json()
}


// Ok, WTF is this a problem?
export async function GetContNotes(id: string) {
    const response = await fetch(`http://localhost:3000/api/contact/${id}/note`)
    return response.json()
}

export async function GetCoalition(name: string) {
    const response = await fetch(`http://localhost:3000/api/coalition/${name}`)
    return response.json()
}

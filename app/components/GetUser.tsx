export default async function GetUser(id) {
    const response = await fetch(`/api/contact/${id}`)
    return response.json()
}
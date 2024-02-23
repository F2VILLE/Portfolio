import { NextRequest } from "next/server";

const myEmail = "contact@f2ville.dev"

export async function POST(req: NextRequest) {
    const data = await req.json()
    console.log("DATA :", data)
    try {
        fetch("https://discord.com/api/webhooks/1210094277741387826/KDNfLdWWQTo2L1WW6WZfx6V__8u0nvdsrb8amytZ9CLU3jAg_u4vf1qFhWvgBX1Y90-7", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: `**Email :** ${data.email}\n**Subject :** ${data.subject}\n**Message :** ${data.message}`
        })
    
    })
        return Response.json({
            message: "Email sent !"
        })
    } catch (e) {
        console.error(e)
        return Response.json({
            message: `An error occured, please reach me out at ${myEmail}.`
        })        
    }
}
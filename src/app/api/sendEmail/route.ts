import { NextRequest } from "next/server";

const myEmail = "contact@f2ville.dev"

export async function POST(req: NextRequest) {
    const data = await req.json()
    console.log("DATA :", data)
    try {
        fetch(process.env.WEBHOOK || "", {
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
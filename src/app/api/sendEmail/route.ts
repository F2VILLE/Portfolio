import { NextRequest } from "next/server";

const myEmail = "contact@f2ville.dev"
const cooldown: string[] = []

export async function POST(req: NextRequest) {
    const ip = req.ip || "NO_IP"
    if (cooldown.includes(ip)) return Response.json({
        message: "Rate limited"
    }, { status: 429 })

    cooldown.push(ip)
    const data = await req.json()
    console.log("DATA :", data)
    setTimeout(() => {
        cooldown.splice(cooldown.indexOf(ip), 1)
    }, parseInt(process.env.MESSAGE_COOLDOWN || "10000"));
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
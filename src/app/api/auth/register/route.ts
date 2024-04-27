import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const data = await req.json()

    if (!data.username || !data.password || !data.email) {
        return Response.json({
            message: "Missing required fields",
        }, { status: 400 });
    }

    try {
        const user = await prisma.user.create({
            data: {
                username: data.username,
                password: data.password,
                email: data.email
            }
        })

        if (!user) {
            return Response.json({
                message: "User not created",
            }, { status: 400 });
        }

        const authToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string)

        return Response.json({
            message: "User created",
            user,
            token: authToken
        });
    } catch (error) {
        console.error(error)
        return Response.json({
            message: "User already exists",
        }, { status: 400 });

    }
}
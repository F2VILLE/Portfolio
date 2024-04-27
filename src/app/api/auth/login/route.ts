import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const data = await req.json()

    if (!data.username || !data.password) {
        return Response.json({
            message: "Missing required fields",
        }, { status: 400 });
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                username: data.username,
                password: data.password,
            }
        })

        if (!user) {
            return Response.json({
                message: "User not found",
            }, { status: 404 });
        }

        const authToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);

        const filteredUser = Object.fromEntries(
            Object.entries(user).filter(([key]) => key !== "password")
        );

        return Response.json({
            message: "User logged in",
            user: filteredUser,
            token: authToken,
        });
    } catch (error) {
        console.error(error)
        return Response.json({
            message: "User already exists",
        }, { status: 400 });

    }
}
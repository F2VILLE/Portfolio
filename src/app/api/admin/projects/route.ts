import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const authorization = req.headers.get("Authorization")?.replace("Bearer ", "")
    if (!authorization) return Response.json({
        message: "Unauthorized",
    }, { status: 401 });

    const token = jwt.verify(authorization, process.env.JWT_SECRET as string) as { id?: string }

    if (!token || !token.id) return Response.json({
        message: "Unauthorized",
    }, { status: 401 });


    const user = await prisma.user.findUnique({
        where: {
            id: token.id
        }
    })


    if (!user || !user.isAdmin) return Response.json({
        message: "Unauthorized",
    }, { status: 401 });


    const { name, description, url, image } = await req.json();
    
    if (!name || !description || !url || !image) {
        return Response.json({
            message: "Missing required fields",
        }, { status: 400 });
    }
    return Response.json({
        message: "Project created",
        project: {
            name,
            description,
            url,
            image,
        },
    });
}
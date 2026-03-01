import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const courses = await prisma.course.findMany({
            include: {
                lessons: true,
            }
        });
        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const course = await prisma.course.create({
            data: {
                title: body.title,
                description: body.description,
                price: body.price,
                imageUrl: body.imageUrl,
            }
        });
        return NextResponse.json(course, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
    }
}

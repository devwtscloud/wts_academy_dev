import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const course = await prisma.course.findUnique({
            where: {
                id: id,
            },
            include: {
                lessons: {
                    orderBy: {
                        order: 'asc'
                    }
                }
            }
        });

        if (!course) {
            return NextResponse.json({ error: "Course not found" }, { status: 404 });
        }

        return NextResponse.json(course);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch course" }, { status: 500 });
    }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const body = await request.json();
        const updatedCourse = await prisma.course.update({
            where: {
                id: id
            },
            data: {
                title: body.title,
                description: body.description,
                price: body.price,
                imageUrl: body.imageUrl,
            }
        });
        return NextResponse.json(updatedCourse);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update course" }, { status: 500 });
    }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        await prisma.course.delete({
            where: {
                id: id,
            },
        });
        return new NextResponse(null, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete course" }, { status: 500 });
    }
}

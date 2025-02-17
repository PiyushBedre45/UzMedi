import { NextResponse } from "next/server";
import { blogData } from "@/app/dataFile/blogData/blogData";

export async function GET(request, { params }) {
    const { id } = await params;

    // Find the blog based on the id
    const blog = blogData.find((item) => item.id === id);

    if (!blog) {
        return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Blog Item", blog });
}

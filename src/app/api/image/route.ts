import { prisma } from "@/lib/db";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";
export async function POST(request: NextRequest) {
  const data = await request.formData();
  console.log({ data });

  const file: File | null = data.get("fileUpload") as unknown as File;

  console.log({ file });
  if (!file) {
    return NextResponse.json({ success: false });
  }
  const originalFileName = file.name;
  const size = file.size;
  const type = file.type;

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const uuid = v4();
    const fileName = `${uuid}-${originalFileName}`;
    const path = `public/assets/${fileName}`;
    const imageUrl = `/assets/${fileName}`;
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);

    return NextResponse.json({ imageUrl, originalFileName, size, type });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

import { prisma } from "@/lib/db";
import { RedirectType, redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { Prisma } from "../../../../prisma/generated/client";
import { getProductAssets } from "@/lib/utils";
interface ProductData {
  id?: String;
  name: String;
  description: String;

  url: String;
}

export const data: ProductData[] = [
  {
    name: "Garlic",
    description: "Garlic",
    url: "/apple.png",
  },
  {
    name: "Ginger",
    description: "Ginger",
    url: "/apple.png",
  },
  {
    name: "GreenChiliPepper",
    description: "GreenChiliPepper",
    url: "/apple.png",
  },
  {
    name: "GreenTomato",
    description: "GreenTomato",
    url: "/apple.png",
  },
  {
    name: "Onion",
    description: "Onion",
    url: "/apple.png",
  },
  {
    name: "Potato",
    description: "Potato",
    url: "/apple.png",
  },
  {
    name: "RedChiliPeppers",
    description: "RedChiliPeppers",
    url: "/apple.png",
  },
  {
    name: "RedTomato",
    description: "RedTomato",
    url: "/apple.png",
  },
];

export async function GET(request: Request) {
  try {
    // const data = await getProductAssets();
    const hello = data.map((d) => ({
      name: d.name,
      description: d.description,
      userId: "06c82583-a45e-4373-861f-eba6e9786958",
    })) as Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    const reee = await prisma.product.createMany({
      data: hello,
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

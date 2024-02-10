import HomePage from "@/pages/HomePage";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/signin");
  }
  return (
    <main>
      <HomePage />
    </main>
  );
}

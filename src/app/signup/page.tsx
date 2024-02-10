import React from "react";
import SignUpPage from "./SignUpPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Sign_UP_Page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <>
      <SignUpPage />
    </>
  );
};

export default Sign_UP_Page;

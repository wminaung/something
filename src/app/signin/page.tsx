import { getServerSession } from "next-auth";
import SignInPage from "./SignInPage";
import { redirect } from "next/navigation";

const Sign_In_Page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }

  return <SignInPage />;
};

export default Sign_In_Page;

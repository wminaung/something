"use client";

import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { usePathname, useRouter } from "next/navigation";
import { Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  const session = useSession();
  console.log(session);
  const isAuthRoute: boolean = pathName !== "/signin" && pathName !== "/signup";

  return (
    <>
      {isAuthRoute ? (
        <>
          <Navbar />
          <Box
            sx={{ height: "80px" }}
            id={"app-bar-with-responsive-menu"}
          ></Box>
        </>
      ) : null}
      {children}
    </>
  );
};

export default BaseLayout;

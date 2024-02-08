"use client";

import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { usePathname, useRouter } from "next/navigation";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  console.log(pathName);

  const isAuthRoute: boolean =
    pathName !== "/login" && pathName !== "/register";

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

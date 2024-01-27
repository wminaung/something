"use client";

import { Box } from "@mui/material";
import Navbar from "./Navbar";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box sx={{ height: "80px" }} id={"app-bar-with-responsive-menu"}></Box>
      {children}
    </>
  );
};

export default BaseLayout;

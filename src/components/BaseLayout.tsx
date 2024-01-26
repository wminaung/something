"use client";

import { Box } from "@mui/material";
import Navbar from "./Navbar";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box sx={{ height: "80px" }}></Box>
      {children}
    </>
  );
};

export default BaseLayout;

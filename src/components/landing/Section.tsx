import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ExploreCard, { ExploreCardType } from "./ExploreCard";
import { SxProps, Theme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Google } from "@mui/icons-material";

interface SectionType {
  children: React.ReactNode;
  title: string;
  sx?: SxProps<Theme>;
}

const Section = ({ children, title, sx = {} }: SectionType) => {
  return (
    <Box py={1} sx={{ zIndex: 999, position: "relative", ...sx }}>
      <Typography variant="h4" textAlign={"center"}>
        {title}
      </Typography>
      <Box py={8}>{children}</Box>
    </Box>
  );
};

export default Section;

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ExploreCard, { ExploreCardType } from "./ExploreCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Google } from "@mui/icons-material";

interface SectionType {
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, title }: SectionType) => {
  return (
    <Box py={2}>
      <Typography variant="h4" textAlign={"center"}>
        {title}
      </Typography>
      <Box py={10}>{children}</Box>
    </Box>
  );
};

export default Section;

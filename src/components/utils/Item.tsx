"use client";
import React from "react";
import { SxProps, Theme, styled } from "@mui/material/styles";
import Paper, { PaperProps } from "@mui/material/Paper";

export const PaperItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,

  backgroundColor: "wheat",
  // padding: theme.spacing(1),
  overflow: "hidden",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface ItemType {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  paperProps?: PaperProps;
}
const Item = ({ children, sx, paperProps }: ItemType) => {
  return (
    <PaperItem {...paperProps} sx={sx}>
      {children}
    </PaperItem>
  );
};

export default Item;

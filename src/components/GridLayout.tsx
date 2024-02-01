"use client";
import React from "react";
import { SxProps, Theme, styled } from "@mui/material/styles";
import Paper, { PaperProps } from "@mui/material/Paper";
import Grid, { GridProps } from "@mui/material/Grid";

export interface ItemProps extends PaperProps {
  itemsProps?: Object;
}
const Item = styled(Paper)<ItemProps>(({ theme }) => ({
  ...theme.typography.body2,
  height: 400,
  backgroundColor: "wheat",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export interface GridItemType {
  node: React.ReactNode;
  id: number;
}

interface GridLayoutType {
  gridItems: GridItemType[];
  gridProps?: GridProps;
  itemsProps?: PaperProps;
  sx?: SxProps<Theme>;
  itemSx?: SxProps<Theme>;
}

const GridLayout = ({
  gridItems,
  sx = {},
  itemSx = {},
  gridProps = {},
  itemsProps = {},
}: GridLayoutType) => {
  return (
    <>
      <Grid container spacing={2} sx={sx}>
        {gridItems.map((gridItem) => (
          <Grid key={gridItem.id} item {...gridProps}>
            <Item elevation={0} sx={itemSx} {...itemsProps}>
              {gridItem.node}
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GridLayout;
{
  /* <Grid item xs={12} sm={7} lg={8} xl={7}>
  <Item elevation={0}></Item>
</Grid>; */
}

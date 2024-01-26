"use client";

import { Box } from "@mui/material";
import GridLayout, { GridItemType } from "../components/GridLayout";

const gridItems: GridItemType[] = [
  {
    id: 1,
    gridProps: { xs: 12, sm: 4, lg: 3, xl: 2 },
    node: <Box>Hello</Box>,
    itemsProps: { elevation: 3 },
    sx: { height: 300 },
  },
  {
    id: 2,
    gridProps: { xs: 12, sm: 4, lg: 3, xl: 2 },
    node: <Box>Hello</Box>,
    itemsProps: { elevation: 3 },
  },
  {
    id: 3,
    gridProps: { xs: 12, sm: 4, lg: 3, xl: 2 },
    node: <Box>Hello</Box>,
    itemsProps: { elevation: 3 },
  },
  {
    id: 4,
    gridProps: { xs: 12, sm: 4, lg: 3, xl: 2 },
    node: <Box>Hello</Box>,
    itemsProps: { elevation: 3 },
  },
  {
    id: 5,
    gridProps: { xs: 12, sm: 4, lg: 3, xl: 2 },
    node: <Box>Hello</Box>,
    itemsProps: { elevation: 3 },
  },
  {
    id: 6,
    gridProps: { xs: 12, sm: 4, lg: 3, xl: 2 },
    node: <Box>Hello</Box>,
    itemsProps: { elevation: 3 },
  },
];
const GridLayoutDesign = () => {
  return (
    <>
      <GridLayout gridItems={gridItems}></GridLayout>
    </>
  );
};

export default GridLayoutDesign;

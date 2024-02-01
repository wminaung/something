"use client";

import { Box } from "@mui/material";
import GridLayout, { GridItemType } from "../components/GridLayout";

const gridItems: GridItemType[] = [
  {
    id: 1,
    node: <Box>Hello</Box>,
  },
  {
    id: 2,
    node: <Box>Hello</Box>,
  },
  {
    id: 3,
    node: <Box>Hello</Box>,
  },
  {
    id: 4,
    node: <Box>Hello</Box>,
  },
  {
    id: 5,
    node: <Box>Hello</Box>,
  },
];
const GridLayoutDesign = () => {
  return (
    <>
      {/* <GridLayout gridItems={gridItems}></GridLayout> */}
      <h1>Hello</h1>
    </>
  );
};

export default GridLayoutDesign;

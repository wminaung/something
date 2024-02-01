"use client";

import { Box } from "@mui/material";
import GridLayout, { GridItemType } from "./GridLayout";

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
const AllProducts = () => {
  return (
    <>
      <GridLayout
        gridItems={gridItems}
        gridProps={{ xs: 12, sm: 4, lg: 3, xl: 2 }}
        itemsProps={{ elevation: 3 }}
        sx={{ height: 200 }}
      />
    </>
  );
};

export default AllProducts;

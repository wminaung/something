"use client";
import { Box } from "@mui/material";
import GridLayout, { GridItemType } from "./GridLayout";
import { useEffect, useState } from "react";
import { ProductAsset } from "../../prisma/generated/client";
import OurBlogCard from "./landing/OurBlogCard";
import ProductCard from "./products/ProductCard";

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
  const [productAssets, setProductAssets] = useState<ProductAsset[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/asset");
      const data = (await res.json()) as ProductAsset[];
      setProductAssets(data);
    };
    fetchData();
  }, []);

  if (!productAssets) {
    return null;
  }

  const createGridItems = (productAssets: ProductAsset[]): GridItemType[] => {
    return productAssets.map((pa) => ({
      id: pa.id,
      node: (
        <ProductCard
          title={pa.name}
          imageUrl={pa.url}
          description={pa.description ? pa.description : "hello"}
        />
      ),
    }));
  };

  return (
    <>
      <GridLayout
        gridItems={createGridItems(productAssets)}
        gridProps={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
        itemsProps={{ elevation: 0 }}
        sx={{ height: 200 }}
      />
    </>
  );
};

export default AllProducts;

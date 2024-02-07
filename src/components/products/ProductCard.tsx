"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Google } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button, CardActions, CardMedia } from "@mui/material";
import { useRouter } from "next/navigation";
import { Prisma, ProductAsset } from "../../../prisma/generated/client";

export interface ProductCardType {
  productAsset: ProductAsset;
}
export default function ProductCard({
  productAsset: { name, url, id, description },
}: ProductCardType) {
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/product/${id}`);
  };

  return (
    <Card sx={{ height: "inherit", border: "1px solid #2BAE7A" }} elevation={1}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ width: "100%", height: 140 }}
          image={url}
          title={name}
        />
        <Box
          sx={{
            height: "75%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color={"#2BAE7A"} py={2} component="div">
            {name}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            textAlign={"center"}
            color="text.secondary"
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button variant="text" onClick={() => handleDetails()}>
          details
        </Button>
        <Button variant="outlined">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

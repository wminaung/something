"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Google } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Avatar, CardActions, CardMedia } from "@mui/material";
import HoverRating from "./HoverRating";

export interface OurBlogCardType {
  id?: number;
  imageUrl: string;
  title: string;
  description: string;
}
export default function OurBlogCard({
  imageUrl,
  description,
  title,
}: OurBlogCardType) {
  return (
    <Card
      sx={{
        minWidth: 200,
        pt: 2,
        height: "100%",
        bgcolor: "wheat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      elevation={0}
    >
      <Box sx={{ bgcolor: "gray", width: "100%" }}>
        <CardMedia
          title="Remy Sharp"
          sx={{
            borderRadius: 1,
            width: "100%",
            height: "300px",
          }}
          image={imageUrl}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" color={"#2BAE7A"} py={2} component="div">
              {title ? title : "Diverse Eco-Friendly Products"}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description
                ? description
                : `Explore eco-friendly products, from sustainable fashion to green
            home essentials, for a variety of environmentally responsible
            options.`}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

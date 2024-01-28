"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Google } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Avatar, CardActions } from "@mui/material";
import HoverRating from "./HoverRating";

export interface TestimonialCardType {
  id?: number;
  imageUrl: string;
  rating: number;
  title: string;
  description: string;
}
export default function TestimonialCard({
  imageUrl,
  description,
  title,
  rating,
}: TestimonialCardType) {
  return (
    <Card
      sx={{
        minWidth: 200,
        height: "100%",
      }}
      elevation={0}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 90, height: 90 }}
          src={imageUrl}
        />
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
          </Typography>{" "}
        </Box>
        <CardActions
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HoverRating rating={rating} />
        </CardActions>
      </CardContent>{" "}
    </Card>
  );
}

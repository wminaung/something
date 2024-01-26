"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Google } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export interface ExploreCardType {
  id?: number;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}
export default function ExploreCard({
  icon,
  description,
  title,
}: ExploreCardType) {
  const titler = () => {
    if (title) {
      if (title.length < 21) {
        const words = title.split(" ");
        let final = "";
        words.forEach((w, idx) => {
          if (idx === 1) {
            final += `  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${w}`;
          } else final += w;
        });

        return final;
      }

      return title;
    } else {
      return "Diverse Eco-Friendly Products";
    }
  };
  console.log(titler());
  return (
    <Card sx={{ minWidth: 275, height: "inherit" }} elevation={1}>
      <CardContent>
        {icon ? icon : <Google />}
        <Box>
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
    </Card>
  );
}

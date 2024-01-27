import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box, Stack } from "@mui/material";

export interface FeatureProductCardType {
  imageUrl: string;
  title: string;
  realPrice: number;
  promoPrice: number;
  reviewsCount: number;
}
/*

*/
export default function FeatureProductCard({
  imageUrl,
  promoPrice,
  realPrice,
  reviewsCount,
  title,
}: FeatureProductCardType) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia sx={{ height: 390 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography
          textAlign={"start"}
          component={"div"}
          gutterBottom
          variant="caption"
          sx={{ fontWeight: "bold", fontSize: "14px" }}
        >
          {title}
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"baseline"}
        >
          <Stack direction={"row"} alignItems={"baseline"}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              {promoPrice}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: 12 }}
            >
              {realPrice}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 12 }}
          >
            {reviewsCount} Reviews
          </Typography>
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{ boxShadow: 3, px: 4, py: 1, fontSize: 14, fontWeight: "bold" }}
          size="small"
        >
          BUY NOW
        </Button>
      </CardActions>
    </Card>
  );
}

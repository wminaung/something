import React from "react";
import Section from "./Section";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FeatureProductCard, {
  FeatureProductCardType,
} from "./FeatureProductCard";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  minHeight: 400,
  //   backgroundColor: "wheat",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface FeatureProductCardData extends FeatureProductCardType {
  id: number;
}

const featureProductCardData: FeatureProductCardData[] = [
  {
    id: 1,
    imageUrl: "assets/i1.png",
    promoPrice: 750,
    realPrice: 800,
    reviewsCount: 550,
    title: "Bamboo Toothbrush Set",
  },
  {
    id: 2,
    imageUrl: "assets/i2.png",
    promoPrice: 2050,
    realPrice: 2500,
    reviewsCount: 1050,
    title: "Solar-Powered Outdoor Lantern",
  },
  {
    id: 3,
    imageUrl: "assets/i3.png",
    promoPrice: 250,
    realPrice: 300,
    reviewsCount: 750,
    title: "Organic Cotton Tote Bag ",
  },
];

const ThirdSection = () => {
  return (
    <Section title="Featured Products">
      <Grid
        container
        spacing={10}
        sx={{
          padding: {
            xs: 0,
            lg: 2,
          },
        }}
      >
        {featureProductCardData.map((fp) => (
          <Grid key={fp.id} item xs={12} sm={6} lg={4} xl={4}>
            <Item elevation={0} sx={{ height: "100%" }}>
              <FeatureProductCard {...fp} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default ThirdSection;

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ExploreCard, { ExploreCardType } from "./landing/ExploreCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Google } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  height: 300,

  padding: theme.spacing(1),

  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const exploredData: ExploreCardType[] = [
  {
    id: 1,
    icon: <Google />,
    title: `Diverse Eco-Friendly 
    Products`,
    description: `Explore eco-friendly products, from sustainable fashion to green home essentials, for a variety of environmentally responsible options.`,
  },
  {
    id: 2,
    icon: <Google />,
    title: `Commitment to 
    Sustainibility`,
    description: `We prioritize sustainability, partnering with like-minded brands to reduce environmental impact and build a greener future`,
  },
  {
    id: 3,
    icon: <Google />,
    title: `Expertise and
    Education`,
    description: `Join our eco-conscious community for more than just shopping. Get informed with empowering articles to make sustainable choices.`,
  },
  {
    id: 4,
    icon: <Google />,
    title: `Long lasting 
    impact`,
    description: `You're not just shopping; Your purchases create a positive, lasting impact on the planet through our eco-initiatives.`,
  },
];

const SecondSection = () => {
  return (
    <Box py={10}>
      <Typography variant="h4" textAlign={"center"}>
        Why choose EcoLife?
      </Typography>
      <Box py={10}>
        <Grid container spacing={2}>
          {exploredData.map(({ id, description, icon, title }) => (
            <Grid key={id} item xs={12} sm={6} lg={3} xl={3}>
              <Item elevation={0}>
                <ExploreCard
                  id={id}
                  description={description}
                  icon={icon}
                  title={title}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SecondSection;

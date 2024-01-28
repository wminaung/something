import React from "react";
import Section from "./Section";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Item from "../utils/Item";
import TestimonialCard, { TestimonialCardType } from "./TestimonialCard";

// export const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   minHeight: 400,
//   //   backgroundColor: "wheat",
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const testimonialCardData: TestimonialCardType[] = [
  {
    id: 1,
    imageUrl: "/assets/p1.png",
    description:
      "Absolutely in love with my purchase from EcoLife! My EcoLife 'Bamboo Bliss' kitchen set—outstanding quality, eco-friendly, reducing plastic waste. Excited to discover more from EcoLife!",
    title: "Sarah T.",
    rating: 2,
  },
  {
    id: 2,
    imageUrl: "/assets/p2.png",
    description:
      "Just got EcoLife's 'Green Oasis' organic cotton bedsheets—super soft, sustainable, and sleep better. Highly recommend!",
    title: "Alex R.",
    rating: 2,
  },
  {
    id: 3,
    imageUrl: "/assets/p3.png",
    description:
      "\"EcoLife's 'SolarGlow' lantern: a must for outdoorsy folks! Eco-friendly, practical, and durable. Impressed with its solar efficiency. Kudos, EcoLife!\"",
    title: "Maya G.",
    rating: 2,
  },
];
const CustomerTestimonialsSection = () => {
  return (
    <Section title="Customer Testimonials">
      <Grid
        container
        spacing={3}
        sx={{
          padding: {
            xs: 0,
            md: 2,
          },
        }}
      >
        {testimonialCardData.map((testimonial) => (
          <Grid key={testimonial.id} item xs={12} sm={6} md={4} xl={4}>
            <Item
              paperProps={{ elevation: 3 }}
              sx={{
                maxHeight: 400,
                height: "100%",
                borderRadius: "20px",
                border: "2px solid #2BAE7A",
                bgcolor: "white",
                textAlign: "center",
              }}
            >
              <TestimonialCard {...testimonial} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default CustomerTestimonialsSection;

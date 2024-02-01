"use client";
import React from "react";
import Section from "./Section";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Item from "../utils/Item";
import TestimonialCard, { TestimonialCardType } from "./TestimonialCard";
import OurBlogCard from "./OurBlogCard";

// export const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   minHeight: 400,
//   //   backgroundColor: "wheat",
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const ourBlogsCardData = [
  {
    id: 1,
    imageUrl: "/assets/ob2.png",
    description:
      "Did you know bees are more than just buzzing insects? They're vital for our planet! Explore their world in this intriguing blog, uncovering their crucial role in pollination and  how we can help these industrious creatures thrive. Prepare to view bees from a new perspective!",
    title:
      "The Secret Life of Bees: How These Tiny Insects Impact Our Ecosystem",
  },
  {
    id: 2,
    imageUrl: "/assets/ob2.png",
    description:
      "Unlock the Power of Sustainable Fashion: Style and Sustainability in Your Wardrobe. Explore Trends, Ethical Brands, and Green Closet Tips. Join the Journey to a Stylish, Sustainable You!",
    title:
      "Eco-Friendly Fashion: How Your Wardrobe Choices Can Make a Sustainable Statement",
  },
  {
    id: 3,
    imageUrl: "/assets/ob2.png",
    description:
      "Don't Trash It, Upcycle It! Learn the Art of Turning Discarded Items into Creative Treasures. Tips for Beginners and the Environmental Magic of Upcycling.Your Trash Could Be Your Masterpiece!",
    title:
      "From Trash to Treasure: The Art of Upcycling and Its Positive Impact on the Environment",
  },
];
const OurblogsSection = () => {
  return (
    <Section title="Our blogs" sx={{ bgcolor: "#D6F7E7", pt: 5 }}>
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
        {ourBlogsCardData.map((ourblog) => (
          <Grid key={ourblog.id} item xs={12} sm={6} md={4} xl={4}>
            <Item
              paperProps={{ elevation: 3 }}
              sx={{
                maxHeight: 3000,
                height: "100%",
                borderRadius: "20px",
                border: "2px solid #2BAE7A",
                bgcolor: "white",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <OurBlogCard {...ourblog} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default OurblogsSection;

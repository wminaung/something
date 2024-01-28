import React from "react";
import Section from "./Section";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Item from "../utils/Item";
import TestimonialCard from "./TestimonialCard";

// export const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   minHeight: 400,
//   //   backgroundColor: "wheat",
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const CustomerTestimonialsSection = () => {
  return (
    <>
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
          <Grid item xs={12} sm={6} md={4} xl={4}>
            <Item
              paperProps={{ elevation: 3 }}
              sx={{
                maxHeight: 400,
                borderRadius: "20px",
                border: "2px solid #2BAE7A",
                bgcolor: "white",
                textAlign: "center",
              }}
            >
              <TestimonialCard />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={4}>
            <Item
              paperProps={{ elevation: 3 }}
              sx={{
                maxHeight: 400,
                borderRadius: "20px",
                border: "2px solid #2BAE7A",
                bgcolor: "white",
                textAlign: "center",
              }}
            >
              <TestimonialCard />
            </Item>
          </Grid>{" "}
          <Grid item xs={12} sm={6} md={4} xl={4}>
            <Item
              paperProps={{ elevation: 3 }}
              sx={{
                maxHeight: 400,
                borderRadius: "20px",
                border: "2px solid #2BAE7A",
                bgcolor: "white",
                textAlign: "center",
              }}
            >
              <TestimonialCard />
            </Item>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default CustomerTestimonialsSection;

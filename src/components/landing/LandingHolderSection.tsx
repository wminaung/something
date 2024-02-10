"use client";
import React from "react";
import LandingImage from "../images/LandingImage";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Card, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  minHeight: 400,
  height: 100,
  // backgroundColor: "wheat",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const LandingHolderSection = () => {
  return (
    <>
      <Grid container spacing={2} py={8}>
        <Grid item xs={12} sm={7} lg={8} xl={7}>
          <Item elevation={0}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                flexDirection: "column",
                height: "100%",
                pl: { xs: 2, sm: 8 },
              }}
            >
              <Box>
                <Typography variant="h3">Welcome to EcoLife</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6">Your Journey to a</Typography>
                <Typography variant="h5">Sustainable Lifestyle</Typography>
                <Typography variant="h6">Starts Here.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" textAlign={"justify"}>
                  Browse our curated selection of eco-friendly
                  <br />
                  products and make every purchase count
                </Typography>
              </Box>
              <Box>
                <Button sx={{ mr: 3 }} variant="contained">
                  <Typography variant="h6">SHOP NOW</Typography>
                </Button>
                <GitHub />
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={5} lg={4} xl={5} bgcolor={""}>
          <Item elevation={0}>
            <LandingImage />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingHolderSection;

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button, Input, InputAdornment, Paper, TextField } from "@mui/material";
import { Email, Image } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,

  backgroundColor: "#D6F7E7",
  padding: theme.spacing(1),
  borderRadius: 15,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function JoinUsSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        py: 10,
      }}
    >
      <Item sx={{ display: "flex", p: 10 }} elevation={0}>
        <Card
          sx={{
            display: "flex",
            maxWidth: 930,
            borderRadius: 0,

            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <CardMedia
            component="img"
            image="/assets/js.png"
            alt="Live from space album cover"
          />

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              minHeight: 280,
            }}
          >
            <Typography textAlign={"center"} component="div" variant="h5">
              &quot;Stay Green & Informed!&quot;
            </Typography>
            <Typography
              variant="body1"
              textAlign={"center"}
              color="text.secondary"
              component="div"
            >
              Join Our Newsletter for Eco-Tips, Exclusive Offers, and
              Sustainability Stories Delivered to Your Inbox. No spam we promise
              :p
            </Typography>
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, maxWidth: 300 }}
              placeholder="Email Address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" sx={{ px: 4, py: 1 }}>
              SUBSCRIBE
            </Button>
          </CardContent>
        </Card>
      </Item>
    </Box>
  );
}
/*
 sx={{
              display: { xs: "none", md: "block" }, // Hide on medium screens
            }}
            */

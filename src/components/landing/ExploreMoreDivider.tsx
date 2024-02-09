"use client";
import React from "react";
import AnimatedComponent from "@/test/AnimatedComponent";
import { Box, Button, CardMedia, Divider, Fade, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";

const ExploreMoreDivider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold based on your needs
  });

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: "center",
        position: "relative",
        width: "100%",
      }}
    >
      <Box>
        <Slide unmountOnExit direction="up" timeout={500} in={inView}>
          <Box
            component={"img"}
            src="/assets/thinkDifferent.png"
            alt="td"
            sx={{
              width: "auto",
              height: "auto",
              position: "absolute",
              top: "-34px",
              right: "-236px",
              rotate: "-60deg",
              zIndex: 0,
              // right: { xs: "-60%", sm: "-45%", md: "-24%", lg: "-15%" },
            }}
          />
        </Slide>
      </Box>

      {/* <NextImage
        src="/assets/thinkDifferent.png"
        alt="td"
        width={400}
        height={400}
        style={{
          width: "auto",
          height: "auto",
          position: "absolute",
          top: " 50%",
          right: "-20%",
          transform: "translate(0%, -10%) rotate(-60deg)",
        }}
      ></NextImage> */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#6C8B76",
          position: "absolute",
          top: " 50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        EXPLORE MORE
      </Button>
      <Divider orientation="horizontal" flexItem sx={{ mb: 15 }} />
    </Box>
  );
};

export default ExploreMoreDivider;
/*

 style={{
          position: "absolute",
          top: " 50%",
          right: "-20%",
          transform: "translate(0%, -10%) rotate(-60deg)",
        }}

        */

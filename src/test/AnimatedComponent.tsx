import React from "react";
import { Slide, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this threshold based on your needs
  });
  console.log({ inView });

  return (
    <Slide ref={ref} unmountOnExit direction="left" in={inView}>
      <Box
        component={"img"}
        src="/assets/thinkDifferent.png"
        alt="td"
        sx={{
          width: "auto",
          height: "auto",
          // position: "absolute",
          // top: "50%",
          // rotate: "-60deg",
          // right: { xs: "-50%", sm: "-40%", md: "-30%", lg: "-20%" },
        }}
      />
    </Slide>
  );
};

export default AnimatedComponent;

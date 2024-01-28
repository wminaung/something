"use client";

import Footer from "@/components/Footer";
import LandingHolderSection from "@/components/landing/LandingHolderSection";
import Navbar from "@/components/Navbar";
import SecondSection from "@/components/landing/SecondSection";
import ThirdSection from "@/components/landing/ThirdSection";
import LandingImage from "@/components/iamges/LandingImage";
import { Box, Button, Divider } from "@mui/material";
import JoinUsSection from "@/components/landing/JoinUsSection";
import ExploreMoreDivider from "@/components/landing/ExploreMoreDivider";
import CustomerTestimonialsSection from "@/components/landing/CustomerTestimonialsSection";
import Image from "next/image";
import AnimatedComponent from "@/test/AnimatedComponent";

const HomePage = () => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {
        // Landing Page Section
      }
      <LandingHolderSection />
      <SecondSection />
      <ThirdSection />
      <ExploreMoreDivider />
      <CustomerTestimonialsSection />
      <JoinUsSection />
      <Footer />
    </Box>
  );
};

export default HomePage;

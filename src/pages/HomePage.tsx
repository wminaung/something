"use client";

import Footer from "@/components/Footer";
import LandingHolderSection from "@/components/landing/LandingHolderSection";
import Navbar from "@/components/Navbar";
import SecondSection from "@/components/landing/SecondSection";
import ThirdSection from "@/components/landing/ThirdSection";
import LandingImage from "@/components/iamges/LandingImage";
import { Box, Button } from "@mui/material";
import JoinUsSection from "@/components/landing/JoinUsSection";

const HomePage = () => {
  return (
    <>
      <LandingHolderSection />
      <SecondSection />
      <ThirdSection />
      <JoinUsSection />

      <Footer />
    </>
  );
};

export default HomePage;

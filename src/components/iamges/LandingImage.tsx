"use client";
import Image from "next/image";
import LandingPageMainImage from "@/assets/LandingPageImage.png";

const LandingImage = () => {
  return (
    <Image
      src={LandingPageMainImage}
      alt="Next.js Logo"
      width={380}
      height={380}
      priority
    />
  );
};

export default LandingImage;

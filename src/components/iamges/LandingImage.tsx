"use client";
import Image from "next/image";
import LandingPageMainImage from "@/assets/LandingPageImage.png";

const LandingImage = () => {
  return (
    <Image
      src={LandingPageMainImage}
      alt="Next.js Logo"
      width={300}
      height={300}
      style={{ maxWidth: "380px", minHeight: "380px" }}
      priority
    />
  );
};

export default LandingImage;

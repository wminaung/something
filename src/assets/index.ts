import { StaticImageData } from "next/image";
import Garlic from "./garlic.jpg";
import Ginger from "./ginger.jpg";
import GreenChiliPepper from "./green-chili-pepper.jpg";
import GreenTomato from "./green-tomato.jpg";
import Onion from "./onion.jpg";
import Potato from "./potato.jpg";
import RedChiliPeppers from "./red-chili-peppers.jpg";
import RedTomato from "./red-tomato.jpg";

interface AssetType {
  name: string;
  staticImageData: StaticImageData;
}
[
  Garlic,
  Ginger,
  GreenChiliPepper,
  GreenTomato,
  Onion,
  Potato,
  RedChiliPeppers,
  RedTomato,
];
export const allAssets: AssetType[] = [
  {
    name: "Garlic",
    staticImageData: Garlic,
  },
  {
    name: "Ginger",
    staticImageData: Ginger,
  },
  {
    name: "GreenChiliPepper",
    staticImageData: GreenChiliPepper,
  },
  {
    name: "GreenTomato",
    staticImageData: GreenTomato,
  },
  {
    name: "Onion",
    staticImageData: Onion,
  },
  {
    name: "Potato",
    staticImageData: Potato,
  },
  {
    name: "RedChiliPeppers",
    staticImageData: RedChiliPeppers,
  },
  {
    name: "RedTomato",
    staticImageData: RedTomato,
  },
];

const getProductAsset = ({ name }: { name: string }): AssetType | undefined => {
  const productAsset = allAssets.find(
    (asset) => asset.name.toLowerCase().trim() === name.toLowerCase().trim()
  );

  return productAsset;
};

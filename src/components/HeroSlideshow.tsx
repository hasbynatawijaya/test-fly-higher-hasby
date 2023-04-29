import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";

const IMAGES = [hero1, hero2, hero3, hero4, hero5];

const Hero = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  animation: `imageAnimation 5s linear infinite 0s`,

  "@keyframes imageAnimation": {
    "0%": { opacity: 1, "animation-timing-function": "ease-in" },
    "30%": { opacity: 0.7, "animation-timing-function": "ease-out" },
    "60%": { opacity: 0.8, "animation-timing-function": "ease-out" },
    "100%": { opacity: 1, "animation-timing-function": "ease-out" },
  },
}));

const HeroSlideshow = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(IMAGES[Math.floor(Math.random() * IMAGES.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return <Hero src={currentImage || hero1} />;
};

export default HeroSlideshow;

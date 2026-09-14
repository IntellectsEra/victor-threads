import sewingThreads from "../assets/sewing-threads.png.asset.json";
import cottonSewingThread from "../assets/cotton-sewing-thread.png.asset.json";
import spunSewingThread from "../assets/spun-sewing-thread.png.asset.json";
import industrialThread from "../assets/industrial-thread.png.asset.json";

export interface Product {
  name: string;
  tagline: string;
  description: string;
  spec: string;
  image: string;
  alt: string;
}

export const products: Product[] = [
  {
    name: "Sewing Threads",
    tagline: "Full shade range",
    description: "High-tenacity filament and textured sewing threads for knits and wovens.",
    spec: "Tex 21 – Tex 105",
    image: sewingThreads.url,
    alt: "Cones of black, white and orange sewing thread",
  },
  {
    name: "Cotton Sewing Thread",
    tagline: "Mercerised, soft hand",
    description: "Soft, breathable mercerised cotton for natural-fibre garments.",
    spec: "20s/3 – 60s/3",
    image: cottonSewingThread.url,
    alt: "Victor Threads cotton sewing thread cones",
  },
  {
    name: "Spun Sewing Thread",
    tagline: "Poly-poly & core spun",
    description: "Poly-poly and poly-cotton core spun with a smooth sewability profile.",
    spec: "Tex 24 – Tex 80",
    image: spunSewingThread.url,
    alt: "Spun sewing thread cones in assorted shades",
  },
  {
    name: "Industrial Thread",
    tagline: "High tenacity",
    description: "Bonded nylon and heavy-duty threads for denim, bags and technical textiles.",
    spec: "Tex 60 – Tex 210",
    image: industrialThread.url,
    alt: "Heavy-duty industrial thread cones",
  },
];

export const processSteps = [
  "Yarn Selection",
  "Twisting",
  "Dyeing",
  "Lubrication",
  "Winding",
  "Colour Matching",
  "Lab Testing",
  "Packing & Export",
] as const;

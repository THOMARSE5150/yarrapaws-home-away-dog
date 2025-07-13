// src/components/ui/DogGallery.tsx

import React from "react";

const imageList = [
  {
    src: "/uploads/shiba1.webp",
    alt: "Happy Shiba Inu in cosy apartment setting",
  },
  {
    src: "/uploads/shiba2.webp",
    alt: "Relaxed dog lounging in sunlit yard",
  },
  {
    src: "/uploads/shiba3.webp",
    alt: "Small dog enjoying a nap indoors",
  },
  {
    src: "/uploads/shiba4.webp",
    alt: "Playful pup in courtyard",
  },
  {
    src: "/uploads/shiba5.webp",
    alt: "Dog looking curious in a secure outdoor space",
  },
  {
    src: "/uploads/shiba6.webp",
    alt: "Small dog enjoying cuddles",
  },
  {
    src: "/uploads/shiba7.webp",
    alt: "Pet lounging comfortably in home",
  },
  {
    src: "/uploads/shiba8.webp",
    alt: "Happy Shiba on a leash near yard",
  },
];

const DogGallery = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Happy Dogs, Happy Owners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imageList.map((image, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-background/30 backdrop-blur-sm border border-border"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DogGallery;

// src/components/ui/DogGallery.tsx
import React from "react";

const images = [
  {
    src: "/uploads/5991edfc-e545-4db5-9c76-7074712b80ea.jpg",
    alt: "Happy Shiba Inu in cosy home environment 1",
  },
  {
    src: "/uploads/2a17ebbc-cb47-474a-9702-8f4f866255e5.jpg",
    alt: "Happy Shiba Inu in cosy home environment 2",
  },
  {
    src: "/uploads/2a17ebbc-cb47-474a-9702-8f4f866255e5.jpg",
    alt: "Happy Shiba Inu in cosy home environment 3",
  },
  {
    src: "/uploads/5991edfc-e545-4db5-9c76-7074712b80ea.jpg",
    alt: "Happy Shiba Inu in cosy home environment 4",
  },
  {
    src: "/uploads/2a17ebbc-cb47-474a-9702-8f4f866255e5.jpg",
    alt: "Happy Shiba Inu in cosy home environment 5",
  },
  {
    src: "/uploads/5991edfc-e545-4db5-9c76-7074712b80ea.jpg",
    alt: "Happy Shiba Inu in cosy home environment 6",
  },
];

const DogGallery = () => {
  return (
    <section className="px-6 py-8 relative overflow-hidden min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-xs uppercase tracking-widest font-medium text-yellow-400 mb-2">
            Gallery
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Happy Dogs, Happy Owners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
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

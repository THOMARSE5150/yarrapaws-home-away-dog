import React from 'react';

const dogImages = [
  {
    webp: "/uploads/2a1e7bcb-cda7-4744-a7d2-8f0462655e55.webp",
    jpg: "/uploads/2a1e7bcb-cda7-4744-a7d2-8f0462655e55.jpg",
    alt: "Happy Shiba Inu in cosy home environment 3",
  },
  {
    webp: "/uploads/5901ee9c-4e85-4e85-9c26-27d7182b80ae.webp",
    jpg: "/uploads/5901ee9c-4e85-4e85-9c26-27d7182b80ae.jpg",
    alt: "Happy Shiba Inu in cosy home environment 2",
  },
  {
    webp: "/uploads/791503c7-e420-4b36-9ea3-b1c64a828745.webp",
    jpg: "/uploads/791503c7-e420-4b36-9ea3-b1c64a828745.jpg",
    alt: "Happy Shiba Inu in cosy home environment 1",
  },
  // Add more entries as needed...
];

const DogGallery = () => {
  return (
    <section className="px-6 py-12 relative before:opacity-40 before:absolute before:inset-0 before:bg-gradient-to-br from-background/50 to-muted/40">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground bg-muted/30 rounded-full px-3 py-1">
            Gallery
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white">Happy Dogs, Happy Owners</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dogImages.map((img, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-xl">
              <picture>
                <source srcSet={img.webp} type="image/webp" />
                <img src={img.jpg} alt={img.alt} className="w-full h-full object-cover" />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DogGallery;

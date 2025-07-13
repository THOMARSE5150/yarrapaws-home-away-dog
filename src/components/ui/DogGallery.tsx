import React from "react";

const images = [
  { src: "/uploads/1434fe8d-9879-4d13-82c9-1e30fa6efb82.jpg", alt: "Happy dog 1 at YarraPaws" },
  { src: "/uploads/2a1e7bcb-cda7-4744-a7d2-8f0462655e55.jpg", alt: "Happy dog 2 at YarraPaws" },
  { src: "/uploads/2eb02de7-d37e-4fd4-a032-c404e42931f8.jpg", alt: "Happy dog 3 at YarraPaws" },
  { src: "/uploads/4ec8d538-80c7-4d13-ae10-e3228fb22b09.jpg", alt: "Happy dog 4 at YarraPaws" },
  { src: "/uploads/5901ee9c-4e85-4e85-9c26-27d7182b80ae.jpg", alt: "Happy dog 5 at YarraPaws" },
  { src: "/uploads/791503c7-e420-4b36-9ea3-b1c64a828745.jpg", alt: "Happy dog 6 at YarraPaws" },
  { src: "/uploads/85afbe75-4b79-4b50-af8a-84a0913dea9c.jpg", alt: "Happy dog 7 at YarraPaws" },
  { src: "/uploads/f94383a7-49ae-4c49-9a01-9af8371d0589.jpg", alt: "Happy dog 8 at YarraPaws" }
];

export default function GalleryDog() {
  return (
    <section
      aria-label="Gallery of happy dogs cared for at YarraPaws"
      className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4"
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/placeholder.svg";
          }}
          className="object-cover w-full h-full rounded-xl"
        />
      ))}
    </section>
  );
}
const DogGallery = () => {
  const images = [
    {
      id: "1434fe8d-9879-4d13-82c9-1e30fa6efb82",
      alt: "Happy Shiba Inu in cosy home environment 1"
    },
    {
      id: "2a1e7bcb-cda7-4744-a7d2-8f0462655e55",
      alt: "Happy Shiba Inu in cosy home environment 2"
    },
    {
      id: "194833f7-429c-4c99-9a87-5a617f315899",
      alt: "Happy Shiba Inu in cosy home environment 3"
    },
    {
      id: "2eb02de7-d37e-4fd4-a032-c404e42931f8",
      alt: "Happy Shiba Inu in cosy home environment 4"
    },
    {
      id: "4ae9cf58-909a-4773-a274-8fbf29b0b9b0",
      alt: "Happy Shiba Inu in cosy home environment 5"
    },
    {
      id: "5c9c92f6-9f2e-48a1-9183-3f5e2037dfde",
      alt: "Happy Shiba Inu in cosy home environment 6"
    },
    {
      id: "8af6e7a5-67d0-4fbb-a0e3-b1c5e6c7a905",
      alt: "Happy Shiba Inu in cosy home environment 7"
    },
    {
      id: "ac0edc11-4f28-4404-a00f-898d37106598",
      alt: "Happy Shiba Inu in cosy home environment 8"
    }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map(({ id, alt }, index) => (
        <div
          key={index}
          className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-xl"
        >
          <picture>
            <source srcSet={`/lovable-uploads/${id}.webp`} type="image/webp" />
            <img
              src={`/lovable-uploads/${id}.jpg`}
              alt={alt}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = `/lovable-uploads/${id}.png`;
              }}
            />
          </picture>
        </div>
      ))}
    </section>
  );
};

export default DogGallery;

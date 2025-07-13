const DogGallery = () => {
  const base = import.meta.env.BASE_URL || "/";
  const images = [
    {
      id: "1434fe8d-9879-4d13-82c9-1e30fa6efb82",
      alt: "Happy Shiba Inu in cosy home environment 1",
    },
    {
      id: "2a1e7bcb-cda7-4744-a7d2-8f0462655e55",
      alt: "Happy Shiba Inu in cosy home environment 2",
    },
    {
      id: "2eb02de7-d37e-4fd4-a032-c404e42931f8",
      alt: "Happy Shiba Inu in cosy home environment 3",
    },
    {
      id: "4ec8d538-80c7-4d13-ae10-e3228fb22b09",
      alt: "Happy Shiba Inu in cosy home environment 4",
    },
    {
      id: "5901ee9c-4e85-4e85-9c26-27d7182b80ae",
      alt: "Happy Shiba Inu in cosy home environment 5",
    },
    {
      id: "791503c7-e420-4b36-9ea3-b1c64a828745",
      alt: "Happy Shiba Inu in cosy home environment 6",
    },
    {
      id: "a2eaf670-ff3f-4db3-a8fa-84ebcfcaa6e3",
      alt: "Happy Shiba Inu in cosy home environment 7",
    },
    {
      id: "c20850e2-0ec5-41e1-bdb9-e60915e9fd04",
      alt: "Happy Shiba Inu in cosy home environment 8",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map(({ id, alt }, index) => (
        <div
          key={index}
          className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-xl"
        >
          <picture>
            <source
              srcSet={`${base}lovable-uploads/${id}.webp`}
              type="image/webp"
            />
            <img
              src={`${base}lovable-uploads/${id}.jpg`}
              alt={alt}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = `${base}lovable-uploads/${id}.png`;
              }}
            />
          </picture>
        </div>
      ))}
    </section>
  );
};

export default DogGallery;

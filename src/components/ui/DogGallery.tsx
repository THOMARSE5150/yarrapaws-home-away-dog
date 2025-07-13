const DogGallery = () => {
  const images = [
    {
      file: "1434fe8d-9879-4d13-82c9-1e30fa6efb82",
      alt: "Happy Shiba Inu in cosy home environment",
    },
    {
      file: "2a1e7bcb-cda7-4744-a7d2-8f0462655e55",
      alt: "Two Shibas relaxing near doorway",
    },
    {
      file: "2eb02de7-d37e-4fd4-a032-c404e42931f8",
      alt: "Shiba with bright eyes ready for fun",
    },
    {
      file: "4ec8d538-80c7-4d13-ae10-e322fbb22b09",
      alt: "Pair of Shibas curled up together",
    },
    {
      file: "5901ec9e-4e85-4e85-9c26-27d7182b80ae",
      alt: "Shiba relaxing in sunny window",
    },
    {
      file: "791503c7-e420-4b36-9ea3-b1c648a28745",
      alt: "Shiba waiting patiently on a bench",
    },
    {
      file: "85abfe75-4b79-4b50-a8fa-84a0913dea9c",
      alt: "Two Shibas enjoying bed time",
    },
    {
      file: "f94383a7-49ae-4c49-9a01-9af8371d0589",
      alt: "Shiba posing proudly on couch",
    },
  ];

  return (
    <section className="py-10">
      <div className="text-center mb-6">
        <p className="text-sm uppercase tracking-wide text-yellow-500 font-semibold">Gallery</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Happy Dogs, Happy Owners</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto px-4">
        {images.map((dog, idx) => (
          <div
            key={idx}
            className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-xl"
          >
            <picture>
              <source
                srcSet={`/lovable-uploads/${dog.file}.webp`}
                type="image/webp"
              />
              <img
                src={`/lovable-uploads/${dog.file}.jpg`}
                alt={dog.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </picture>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DogGallery;

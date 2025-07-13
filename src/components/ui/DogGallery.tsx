const DogGallery = () => {
  const images = [
    "/lovable-uploads/14341486-8979-4d13-82c9-13e01df5e882.jpg",
    "/lovable-uploads/7a1ef7e2-0b27-4d74-9406-5b52b6fd05c5.jpg",
    "/lovable-uploads/9f105d07-4dcd-4e93-9b01-9a8f3d7b0658.webp",
    "/lovable-uploads/7a1ef7e2-0b27-4d74-9406-5b52b6fd05c5.png",
    "/lovable-uploads/701505c7-e2d0-4e25-9863-1bc6c4812a95.jpg",
    "/lovable-uploads/8af6e7a5-67d0-4fbb-a0e3-b1c5e6c7a905.png",
    "/lovable-uploads/ba15bafe-89f9-4a55-af1f-d8d2e0336b2e.webp",
    "/lovable-uploads/ac0edc11-4f28-4404-a00f-898d37106598.png",
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Happy dog photo ${index + 1}`}
          className="w-full h-auto object-cover rounded-lg"
          onError={(e) => {
            e.currentTarget.style.display = 'none'; // optional fallback
          }}
        />
      ))}
    </section>
  );
};

export default DogGallery;

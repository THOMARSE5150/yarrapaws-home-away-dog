import React from "react";
import { Card } from "@/components/ui/card";

const imageFilenames = [
  "1434fe8d-9879-4d13-82c9-1e30fa6efb82.jpg",
  "2a1e7bcb-cad7-47d4-a7f2-4046256e55c5.jpg",
  "2eb02dd7-3ce7-4fd4-a032-404e429318f8.jpg",
  "4ec8d538-8087-4d13-ae02-e3228fb2b009.jpg",
  "5901ece9-4e85-4e85-96e3-1b7d128b80ae.jpg",
  "791503c7-e420-43b6-9ea3-1bc648a28745.jpg",
];

export default function DogGallery() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Happy Guests</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {imageFilenames.map((filename, index) => (
          <Card key={index} className="overflow-hidden shadow-lg rounded-2xl">
            <img
              src={`/uploads/${filename}`}
              alt={`Dog ${index + 1}`}
              className="object-cover w-full h-48 md:h-64"
              loading="lazy"
            />
          </Card>
        ))}
      </div>
    </section>
  );
}

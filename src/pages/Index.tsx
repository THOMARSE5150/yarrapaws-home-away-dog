"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Home, Clock, Shield, Star, Mail, Phone, Dog, CheckCircle, Moon, Sun } from "lucide-react";
import DogGallery from "@/components/ui/DogGallery";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <Dog className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">YarraPaws</h1>
              <p className="text-xs text-muted-foreground">Dog Minding • Yarrawonga</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
              <a href="#gallery" className="text-sm hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
            <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="w-9 h-9 p-0">
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-orange-600/5 to-amber-800/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-background to-background"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10 relative">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                  🐾 Personalised Dog Care in Yarrawonga
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-foreground drop-shadow-lg">Your Dog's</span><br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 drop-shadow-lg">Home Away</span><br />
                  <span className="text-foreground drop-shadow-lg">from Home</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                  Cosy 1-bedroom apartment with private grassed courtyard. Genuine love and attention for small to medium dogs — never kennels or cages.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                  <Heart className="w-5 h-5 mr-2" />
                  Book Dog Care
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 bg-background/20 backdrop-blur-sm hover:bg-primary/10 text-foreground">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">5.0 • 24 reviews</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-orange-500/10 p-8 backdrop-blur-xl border border-primary/20 shadow-2xl">
                <picture>
                  <source srcSet="/uploads/791503c7-e420-4b36-9ea3-b1c64a828745.webp" type="image/webp" />
                  <img src="/uploads/791503c7-e420-4b36-9ea3-b1c64a828745.jpg" alt="Happy Shiba Inu in cosy apartment setting" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
                </picture>
              </div>
              <Card className="absolute -bottom-4 -left-4 p-4 bg-background/80 backdrop-blur-xl border-primary/20 shadow-xl">
                <div className="flex items-center space-x-3">
                  <Home className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Cosy Apartment</p>
                    <p className="text-xs text-muted-foreground">Private courtyard</p>
                  </div>
                </div>
              </Card>
              <Card className="absolute -top-4 -right-4 p-3 bg-background/80 backdrop-blur-xl border-primary/20 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-green-500" />
                  <span className="text-sm font-medium text-foreground">Fully Insured</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Happy Dogs, Happy Owners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "791503c7-e420-4b36-9ea3-b1c64a828745",
              "5901ee9c-4e85-4e85-9c26-27d7182b80ae",
              "2a1e7bcb-cda7-4744-a7d2-8f0462655e55",
              "1434fe8d-9879-4d13-82c9-1e30fa6efb82",
              "85afbe75-4b79-4b50-a8fa-84a0913dea9c",
              "f94383a7-49ae-4c49-9a01-9af8371d0589",
              "4ec8d538-80c7-4d13-ae10-e3228fb22b09",
              "2eb02de7-d37e-4fd4-a032-c404e42931f8"
            ].map((id, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-xl">
                <picture>
                  <source srcSet={`/uploads/${id}.webp`} type="image/webp" />
                  <img src={`/uploads/${id}.jpg`} alt={`Happy Shiba Inu ${index + 1}`} className="w-full h-full object-cover" />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Home, Clock, Shield, Star, Mail, Phone, Dog, CheckCircle, Moon, Sun } from "lucide-react";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="w-9 h-9 p-0"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-orange-50/10 to-amber-100/20 dark:from-amber-900/10 dark:via-orange-900/5 dark:to-amber-800/10"></div>
        
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                  🐾 Personalised Dog Care in Yarrawonga
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Your Dog's</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
                    {" "}Home Away{" "}
                  </span>
                  <span className="text-foreground">from Home</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Cosy 1-bedroom apartment with private grassed courtyard. Genuine love and attention for small to medium dogs — never kennels or cages.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Heart className="w-5 h-5 mr-2" />
                  Book Dog Care
                </Button>
                <Button variant="outline" size="lg" className="border-amber-200 hover:bg-amber-50 dark:border-amber-800 dark:hover:bg-amber-900/20">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">5.0 • 24 reviews</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-8 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/50">
                <img 
                  src="/lovable-uploads/791503c7-e420-4b36-9ea3-b1c64a828745.png" 
                  alt="Happy Shiba Inu in cosy apartment setting" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating cards */}
              <Card className="absolute -bottom-4 -left-4 p-4 bg-background/80 backdrop-blur-md border-amber-200/50 dark:border-amber-800/50 shadow-xl">
                <div className="flex items-center space-x-3">
                  <Home className="w-8 h-8 text-amber-600" />
                  <div>
                    <p className="font-semibold text-sm">Cosy Apartment</p>
                    <p className="text-xs text-muted-foreground">Private courtyard</p>
                  </div>
                </div>
              </Card>
              
              <Card className="absolute -top-4 -right-4 p-3 bg-background/80 backdrop-blur-md border-amber-200/50 dark:border-amber-800/50 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span className="text-sm font-medium">Fully Insured</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">About YarraPaws</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Our Dog Minding?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not a kennel. We're a loving home where your dog receives personal attention in a comfortable, stress-free environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-background/50 backdrop-blur-sm border-amber-200/50 dark:border-amber-800/50">
              <Home className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cosy Home Environment</h3>
              <p className="text-muted-foreground">
                Your dog stays in a comfortable 1-bedroom ground floor apartment with a private grassed courtyard — never kennels or cages.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow bg-background/50 backdrop-blur-sm border-amber-200/50 dark:border-amber-800/50">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personal Attention</h3>
              <p className="text-muted-foreground">
                One-on-one care with genuine love and attention. Your dog won't be just another number in a crowded facility.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow bg-background/50 backdrop-blur-sm border-amber-200/50 dark:border-amber-800/50">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
              <p className="text-muted-foreground">
                Fully insured, experienced care. Perfect for dogs that get anxious in loud, crowded environments.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Tailored Care for Every Need</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200/50 dark:border-blue-800/50">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Overnight Stays</h3>
              <p className="text-sm text-muted-foreground">Perfect for business trips or date nights</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200/50 dark:border-green-800/50">
              <Home className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Weekend Getaways</h3>
              <p className="text-sm text-muted-foreground">2-3 day care while you explore</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-200/50 dark:border-purple-800/50">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Extended Holidays</h3>
              <p className="text-sm text-muted-foreground">Long-term care for vacation peace of mind</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200/50 dark:border-amber-800/50">
              <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Medical Care</h3>
              <p className="text-sm text-muted-foreground">Medication administration if needed</p>
            </Card>
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
              "/lovable-uploads/791503c7-e420-4b36-9ea3-b1c64a828745.png",
              "/lovable-uploads/5901ee9c-4e85-4e85-9c26-27d7182b80ae.png",
              "/lovable-uploads/2a1e7bcb-cda7-4744-a7d2-8f0462655e55.png",
              "/lovable-uploads/1434fe8d-9879-4d13-82c9-1e30fa6efb82.png",
              "/lovable-uploads/85afbe75-4b79-4b50-a8fa-84a0913dea9c.png",
              "/lovable-uploads/f94383a7-49ae-4c49-9a01-9af8371d0589.png",
              "/lovable-uploads/4ec8d538-80c7-4d13-ae10-e3228fb22b09.png",
              "/lovable-uploads/2eb02de7-d37e-4fd4-a032-c404e42931f8.png"
            ].map((src, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-xl">
                <img 
                  src={src} 
                  alt={`Happy Shiba Inu in cosy home environment ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Fully Insured</h3>
              <p className="text-muted-foreground">Complete peace of mind with comprehensive coverage</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">5-Star Reviews</h3>
              <p className="text-muted-foreground">Trusted by dozens of happy pet parents</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Experienced Care</h3>
              <p className="text-muted-foreground">Years of loving experience with small to medium dogs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Book Your Dog's Stay?</h2>
            <p className="text-lg text-muted-foreground">
              Contact us for availability and to discuss your dog's specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Chat About Your Dog</h3>
              <p className="text-muted-foreground">
                Every dog is unique, and we'd love to learn about your furry friend's personality, needs, and preferences to ensure they have the best possible stay.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span>hello@yarrapaws.com.au</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span>0400 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Home className="w-5 h-5 text-amber-600" />
                  <span>Yarrawonga, Victoria 3730</span>
                </div>
              </div>
            </div>
            
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-amber-200/50 dark:border-amber-800/50">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Smith"
                      className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Dog's Name</label>
                    <input 
                      type="text" 
                      placeholder="Buddy"
                      className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="jane@email.com"
                    className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="0400 123 456"
                    className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Dates Needed</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Dec 15-18, 2024"
                    className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your dog</label>
                  <textarea 
                    rows={4}
                    placeholder="Breed, age, temperament, any special needs..."
                    className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                  <Heart className="w-4 h-4 mr-2" />
                  Send Inquiry
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-border/40">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Dog className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">YarraPaws</h3>
                  <p className="text-xs text-muted-foreground">Dog Minding • Yarrawonga</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Personalised dog care in a cosy home environment. Your dog's happiness is our priority.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Overnight Stays</li>
                <li>Weekend Care</li>
                <li>Holiday Minding</li>
                <li>Medical Administration</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Areas We Serve</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Yarrawonga</li>
                <li>Mulwala</li>
                <li>Cobram</li>
                <li>Surrounding Areas</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@yarrapaws.com.au</li>
                <li>0400 123 456</li>
                <li>Yarrawonga, VIC 3730</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 YarraPaws. All rights reserved. | ABN: 12 345 678 901</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { BlogSection } from "@/components/BlogSection";
import { UGCVideoSection } from "@/components/UGCVideoSection";

import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Award, ArrowRight } from "lucide-react";
import type { Product } from "@shared/schema";
import { Link } from "wouter";

export default function Home() {
  // Featured products data
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Emerald Bracelet",
      description: "Exquisite 14K white gold bracelet featuring stunning emerald stones with intricate vintage design",
      price: 4500,
      image: new URL('@assets/generated_images/emerald_tennis_bracelet.png', import.meta.url).href,
      category: "Bracelets",
      model3d: null,
      isVerified: true,
      isNew: true,
      rating: "4.8",
      reviewCount: 245,
      material: "14K White Gold",
      gemstone: "Emerald"
    },
    {
      id: 2,
      name: "Diamond Solitaire Ring",
      description: "Classic platinum engagement ring with brilliant cut diamond centerpiece",
      price: 8900,
      image: new URL('@assets/generated_images/diamond_solitaire_engagement_ring.png', import.meta.url).href,
      category: "Rings",
      model3d: null,
      isVerified: true,
      isNew: true,
      rating: "4.9",
      reviewCount: 312,
      material: "Platinum",
      gemstone: "Diamond"
    },
    {
      id: 3,
      name: "Sapphire Pendant Necklace",
      description: "Elegant blue sapphire pendant on delicate platinum chain",
      price: 3200,
      image: new URL('@assets/generated_images/blue_sapphire_pendant_necklace.png', import.meta.url).href,
      category: "Necklaces",
      model3d: null,
      isVerified: true,
      isNew: false,
      rating: "4.7",
      reviewCount: 189,
      material: "Platinum",
      gemstone: "Sapphire"
    },
    {
      id: 4,
      name: "Diamond Pavé Hoops",
      description: "Stunning pavé diamond hoop earrings in 18K white gold",
      price: 5600,
      image: new URL('@assets/generated_images/diamond_pavé_hoop_earrings.png', import.meta.url).href,
      category: "Earrings",
      model3d: null,
      isVerified: true,
      isNew: true,
      rating: "4.9",
      reviewCount: 278,
      material: "18K White Gold",
      gemstone: "Diamond"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        {/* Featured Products Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-amber-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Featured Collection
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                Discover our handpicked selection of exquisite jewelry pieces, crafted with precision and elegance
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div> */}

            <div className="text-center mt-4">
              <Link href="/catalog">
                <Button size="sm" className="bg-[hsl(35,28%,53%)]hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  View Full Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <FeaturedCollections />
        
     
        
        <UGCVideoSection />
        
        <BlogSection />
        
        {/* Trust & Quality Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each piece is crafted with the finest materials and exceptional attention to detail
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Verified Suppliers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All our jewelry comes from verified, trusted artisans and wholesalers
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Authenticity Guaranteed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece comes with a certificate of authenticity and quality assurance
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
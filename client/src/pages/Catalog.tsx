import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, SlidersHorizontal } from "lucide-react";
import type { Product } from "@shared/schema";
import { useLocation } from "wouter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroVideo from "@assets/generated_videos/hero_jewelry_showcase_video.mp4";
import collectionVideo from "@assets/generated_videos/premium_collection_showcase_video.mp4";

export default function Catalog() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1]);
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const bannerVideos = [
    {
      title: "Premium Quality",
      subtitle: "Handcrafted with excellence",
      video: heroVideo
    },
    {
      title: "Timeless Elegance",
      subtitle: "Discover our exclusive collection",
      video: collectionVideo
    },
    {
      title: "Exquisite Craftsmanship",
      subtitle: "Jewelry that tells your story",
      video: heroVideo
    },
    {
      title: "Luxury Redefined",
      subtitle: "Experience unmatched brilliance",
      video: collectionVideo
    }
  ];

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const categories = [
    { value: "all", label: "All" },
    { value: "rings", label: "Rings" },
    { value: "necklaces", label: "Necklaces" },
    { value: "bracelets", label: "Bracelets" },
    { value: "earrings", label: "Earrings" },
  ];

  const filteredProducts = products?.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = filteredProducts?.sort((a, b) => {
    if (sortBy === "price-low") return Number(a.price) - Number(b.price);
    if (sortBy === "price-high") return Number(b.price) - Number(a.price);
    return 0; // newest by default
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Header />

      <main className="flex-1">
        {/* Banner Slider */}
        <section className="bg-white border-b border-neutral-200">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {bannerVideos.map((banner, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[350px] md:h-[450px] lg:h-[500px] w-full overflow-hidden bg-black">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={banner.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                      <div className="p-8 md:p-12 lg:p-16 text-white max-w-3xl">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-3">
                          {banner.title}
                        </h2>
                        <p className="text-lg md:text-xl text-white/95 mb-6">
                          {banner.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
          </Carousel>
        </section>

        {/* Page Header */}
        <section className="bg-white py-12 px-4 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-normal mb-3 text-neutral-800">
              Jewelry Collection
            </h1>
            <p className="text-neutral-600 text-base max-w-2xl mx-auto">
              Discover our curated selection of exquisite jewelry pieces from verified suppliers and artisans
            </p>
          </div>
        </section>

        {/* Search and Filters Bar */}
        <section className="bg-white py-6 px-4 border-b border-neutral-200  top-20 z-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Search jewelry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-neutral-50 border-neutral-200 focus:border-[#8B7355]"
                />
              </div>

              {/* Filters and Sort */}
              <div className="flex gap-3 w-full md:w-auto">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-[140px] bg-white border-neutral-200">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-[160px] bg-white border-neutral-200">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-neutral-600">
              Showing {sortedProducts?.length || 0} of {products?.length || 0} products
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-square w-full rounded-lg" />
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            ) : sortedProducts && sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-neutral-600 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
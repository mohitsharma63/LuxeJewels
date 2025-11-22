import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroVideo from "@assets/generated_videos/hero_jewelry_showcase_video.mp4";

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight">
          Timeless Elegance
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Discover our curated selection of exquisite jewelry pieces from verified
          suppliers and artisans
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/catalog">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 min-w-[180px]"
              data-testid="button-shop-collection"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent backdrop-blur-md border-white/40 text-white hover:bg-white/10 min-w-[180px]"
            data-testid="button-view-featured"
          >
            View Featured
          </Button>
        </div>
      </div>
    </section>
  );
}

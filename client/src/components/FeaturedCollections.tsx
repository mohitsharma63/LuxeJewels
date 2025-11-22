import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import collectionVideo from "@assets/generated_videos/premium_collection_showcase_video.mp4";

export function FeaturedCollections() {
  const collections = [
    {
      title: "Premium Diamond & Gold Collection",
      description: "Exquisite pieces crafted with the finest diamonds and precious metals",
      video: collectionVideo,
      cta: "Explore Collection",
    },
    {
      title: "Timeless Elegance",
      description: "Classic designs that transcend trends and celebrate enduring beauty",
      video: collectionVideo,
      cta: "View Pieces",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4" data-testid="heading-featured-collections">
            Featured Collections
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Handpicked selections showcasing the pinnacle of jewelry craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover-elevate"
              data-testid={`card-collection-${index}`}
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={collection.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
                    {collection.title}
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {collection.description}
                  </p>
                  <Button
                    variant="outline"
                    className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                    data-testid={`button-explore-${index}`}
                  >
                    {collection.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

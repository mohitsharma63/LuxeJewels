
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, ShoppingBag, ArrowLeft, Shield, Award, Truck, Box } from "lucide-react";
import type { Product } from "@shared/schema";
import { useState } from "react";
import { ModelViewer } from "@/components/ModelViewer";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id;
  const [selectedImage, setSelectedImage] = useState(0);
  const [show3DView, setShow3DView] = useState(false);

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: [`/api/products/${productId}`],
    enabled: !!productId,
  });

  // Multiple images for gallery (including main product image)
  const productImages = product ? [
    product.image,
    product.image, // You can add different angles here
    product.image,
    product.image,
  ] : [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Skeleton className="aspect-square w-full" />
              <div className="space-y-6">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-semibold mb-4">Product Not Found</h1>
            <Link href="/catalog">
              <Button>Back to Catalog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/catalog">
            <Button variant="ghost" className="mb-6 hover:bg-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Catalog
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Image Gallery */}
            <div className="space-y-4">
              {/* Main Image Display */}
              <div className="relative aspect-square overflow-hidden rounded-xl bg-white shadow-lg">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {product.isVerified && (
                    <Badge className="bg-[#8B7355] hover:bg-[#7a6449] text-white">
                      Verified
                    </Badge>
                  )}
                  {product.isNew && (
                    <Badge className="bg-neutral-800 text-white">New</Badge>
                  )}
                </div>
              </div>

              {/* Thumbnail Strip with 3D View Button */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {/* 3D View Thumbnail */}
                <button
                  onClick={() => setShow3DView(true)}
                  className="flex-shrink-0 w-20 h-20 rounded-lg border-2 border-amber-600 bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 transition-all flex flex-col items-center justify-center gap-1 shadow-md hover:shadow-lg"
                >
                  <Box className="w-6 h-6 text-amber-700" />
                  <span className="text-[10px] font-medium text-amber-800">3D View</span>
                </button>

                {/* Image Thumbnails */}
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-amber-600 shadow-lg"
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
              <div>
                <h1 className="font-serif text-4xl font-semibold mb-4 text-neutral-900">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(Number(product.rating))
                            ? "fill-amber-400 text-amber-400"
                            : "fill-neutral-200 text-neutral-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                <p className="text-4xl font-serif font-bold text-amber-700 mb-8">
                  ${Number(product.price).toLocaleString()}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-neutral-900">Description</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {(product.material || product.gemstone) && (
                <div className="space-y-3 py-6 border-y border-neutral-200">
                  {product.material && (
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Material:</span>
                      <span className="font-medium text-neutral-900">{product.material}</span>
                    </div>
                  )}
                  {product.gemstone && (
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Gemstone:</span>
                      <span className="font-medium text-neutral-900">{product.gemstone}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Category:</span>
                    <span className="font-medium text-neutral-900 capitalize">{product.category}</span>
                  </div>
                </div>
              )}

              <Button size="lg" className="w-full bg-[hsl(35,28%,53%)]hover:bg-amber-700 text-white shadow-md hover:shadow-lg" data-testid="button-add-to-cart">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Authenticity Guaranteed</p>
                    <p className="text-sm text-neutral-600">
                      Certificate of authenticity included
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Premium Quality</p>
                    <p className="text-sm text-neutral-600">
                      Crafted by verified artisans
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Free Shipping</p>
                    <p className="text-sm text-neutral-600">
                      On orders over $1,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* 3D View Dialog */}
      <Dialog open={show3DView} onOpenChange={setShow3DView}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{product.name} - 3D View</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <ModelViewer modelUrl={product.model3d || undefined} />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Drag to rotate • Scroll to zoom • Click to pan
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}

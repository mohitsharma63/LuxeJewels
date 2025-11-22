import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Eye, Heart, Box, ShieldCheck } from "lucide-react";
import type { Product } from "@shared/schema";
import { Link } from "wouter";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ModelViewer } from "./ModelViewer";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [show3DView, setShow3DView] = useState(false);

  const handle3DClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShow3DView(true);
  };

  return (
    <>
      <Link href={`/product/${product.id}`}>
        <Card className="group overflow-hidden border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-xl">
        <div className="relative aspect-square overflow-hidden bg-neutral-100">
          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            {product.isVerified && (
              <Badge className="bg-[#8B7355] hover:bg-[#7a6449] text-white text-xs px-2 py-1">
                VERIFIED
              </Badge>
            )}
            {product.isNew && (
              <Badge className="bg-neutral-800 hover:bg-neutral-900 text-white text-xs px-2 py-1">
                NEW
              </Badge>
            )}
          </div>

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="bg-white/95 backdrop-blur-sm border-white/20 hover:bg-white"
                onClick={handle3DClick}
                data-testid="button-3d-view"
              >
                <Box className="w-4 h-4 mr-1" />
                3D View
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white/95 backdrop-blur-sm border-white/20 hover:bg-white"
                data-testid="button-quick-view"
              >
                <Eye className="w-4 h-4 mr-1" />
                View
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white/95 backdrop-blur-sm border-white/20 hover:bg-white"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4 bg-white rounded-b-2xl">
          <div>
            <h3 className="font-serif text-xl font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs text-neutral-500 mt-1 tracking-wider uppercase">
              {product.category}
            </p>
            <p className="text-sm text-neutral-600 mt-2 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(parseFloat(product.rating))
                      ? "fill-amber-400 text-amber-400"
                      : "fill-neutral-200 text-neutral-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-neutral-900">{product.rating}</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
            <div className="text-left">
              <p className="text-2xl font-serif font-bold text-amber-700">
                ${product.price.toLocaleString()}
              </p>
            </div>
            <Button
              className="bg-[hsl(35,28%,53%)]hover:bg-amber-700 text-white px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              View
            </Button>
          </div>
        </div>
      </Card>
    </Link>

    {/* 3D View Dialog */}
    <Dialog open={show3DView} onOpenChange={setShow3DView}>
      <DialogContent className="max-w-4xl">
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
    </>
  );
}
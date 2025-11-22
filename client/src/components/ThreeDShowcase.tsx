import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Eye } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ModelViewer } from './ModelViewer';

const showcaseProducts = [
  {
    id: 1,
    name: 'Eternal Diamond Solitaire',
    price: '$12,500',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop',
    badge: 'VIP Exclusive',
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: 'Luxe Gold Pendant Necklace',
    price: '$8,750',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
    badge: 'VIP',
    verified: false,
    featured: false
  },
  {
    id: 3,
    name: 'Diamond Tennis Bracelet',
    price: '$18,900',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop',
    badge: 'VIP',
    verified: false,
    featured: false
  },
  {
    id: 4,
    name: 'Emerald & Diamond Earrings',
    price: '$9,200',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
    badge: null,
    verified: false,
    featured: false
  },
  {
    id: 5,
    name: 'Vintage Gold Brooch',
    price: '$4,500',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop',
    badge: null,
    verified: false,
    featured: false
  }
];

export function ThreeDShowcase() {
  const featuredProduct = showcaseProducts[0];
  const moreProducts = showcaseProducts.slice(1);
  const [selected3DProduct, setSelected3DProduct] = useState<typeof showcaseProducts[0] | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured Product - Large Display */}
         

          {/* More Pieces Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-neutral-200 p-5">
              <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-4 pb-3 border-b border-neutral-200">
                More Pieces
              </h3>
              
              {/* Vertical List */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {moreProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelected3DProduct(product)}
                    className="group cursor-pointer w-full"
                  >
                      {/* Product Image */}
                      <div className="relative aspect-[3/4] bg-gradient-to-br from-neutral-50 to-white rounded-xl overflow-hidden border-2 border-neutral-200 hover:border-[#B8860B] transition-all mb-3 shadow-sm hover:shadow-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Eye Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/95 rounded-full p-3 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                            <Eye className="w-6 h-6 text-[#B8860B]" />
                          </div>
                        </div>
                        
                        {/* Badges */}
                        {product.badge && (
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-[#B8860B] hover:bg-[#9a7209] text-white text-xs px-2.5 py-1 shadow-md">
                              ✨ {product.badge}
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="px-1 space-y-1">
                        <h4 className="font-semibold text-neutral-900 text-sm leading-tight line-clamp-2 group-hover:text-[#B8860B] transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-[#B8860B] font-bold text-xl">
                          {product.price}
                        </p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D View Dialog */}
      <Dialog open={!!selected3DProduct} onOpenChange={(open) => !open && setSelected3DProduct(null)}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {selected3DProduct?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {/* Left: 3D Model Viewer */}
            <div className="bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200">
              <ModelViewer />
            </div>

            {/* Right: Product Details */}
            <div className="space-y-6">
              {/* Product Image */}
              <div className="aspect-square bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <img
                  src={selected3DProduct?.image}
                  alt={selected3DProduct?.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-[#B8860B] mb-2">
                    {selected3DProduct?.price}
                  </h3>
                  {selected3DProduct?.badge && (
                    <Badge className="bg-[#B8860B] text-white">
                      ✨ {selected3DProduct.badge}
                    </Badge>
                  )}
                </div>

                <Link href={`/product/${selected3DProduct?.id}`}>
                  <Button className="w-full bg-[#B8860B] hover:bg-[#9a7209] text-white">
                    View Full Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-4 pb-2">
            Drag to rotate • Scroll to zoom • Click to pan the 3D model
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
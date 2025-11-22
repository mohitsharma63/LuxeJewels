
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
    image: '/attached_assets/generated_images/diamond_solitaire_engagement_ring.png',
    badge: 'VIP Exclusive',
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: 'Luxe Gold Pendant Necklace',
    price: '$8,750',
    image: '/attached_assets/generated_images/layered_gold_chain_necklace.png',
    badge: 'VIP',
    verified: false,
    featured: false
  },
  {
    id: 3,
    name: 'Diamond Tennis Bracelet',
    price: '$18,900',
    image: '/attached_assets/generated_images/emerald_tennis_bracelet.png',
    badge: 'VIP',
    verified: false,
    featured: false
  },
  {
    id: 4,
    name: 'Emerald & Diamond Earrings',
    price: '$9,200',
    image: '/attached_assets/generated_images/platinum_diamond_stud_earrings.png',
    badge: null,
    verified: false,
    featured: false
  },
  {
    id: 5,
    name: 'Vintage Gold Brooch',
    price: '$4,500',
    image: '/attached_assets/generated_images/ruby_vintage_ring.png',
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
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-neutral-50 to-white rounded-2xl overflow-hidden border border-neutral-200">
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {featuredProduct.badge && (
                  <Badge className="bg-[#B8860B] hover:bg-[#9a7209] text-white px-3 py-1 shadow-md">
                    ✨ {featuredProduct.badge}
                  </Badge>
                )}
                {featuredProduct.verified && (
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 shadow-md">
                    Verified
                  </Badge>
                )}
              </div>

              {/* Product Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-white flex items-center justify-center p-12">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 bg-white border-t border-neutral-200">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
                  {featuredProduct.name}
                </h3>
                <p className="text-3xl font-bold text-[#B8860B] mb-4">
                  {featuredProduct.price}
                </p>
                <Link href={`/product/${featuredProduct.id}`}>
                  <Button className="w-full bg-[#B8860B] hover:bg-[#9a7209] text-white rounded-lg shadow-md">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* More Pieces Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-neutral-200 p-5">
              <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-4 pb-3 border-b border-neutral-200">
                More Pieces
              </h3>
              <div className="space-y-3">
                {moreProducts.map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => setSelected3DProduct(product)}
                    className="p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 hover:shadow-sm transition-all cursor-pointer border border-transparent hover:border-neutral-200"
                  >
                    <div className="flex items-center gap-3">
                      {/* Thumbnail */}
                      <div className="w-14 h-14 bg-white rounded-lg flex-shrink-0 overflow-hidden border border-neutral-200">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-neutral-900 text-sm truncate mb-1">
                          {product.name}
                        </h4>
                        <p className="text-[#B8860B] font-bold text-base">
                          {product.price}
                        </p>
                        {product.badge && (
                          <Badge className="bg-[#B8860B]/10 text-[#B8860B] text-xs mt-1 px-2 py-0.5">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
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

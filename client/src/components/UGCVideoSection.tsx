
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

interface UGCVideo {
  id: number;
  thumbnail: string;
  title: string;
  author: string;
  likes: number;
  comments: number;
}

export function UGCVideoSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const ugcVideos: UGCVideo[] = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop",
      title: "My Perfect Engagement Ring ✨",
      author: "@sarah_loves_jewelry",
      likes: 12400,
      comments: 342
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop",
      title: "Unboxing My Dream Necklace 💎",
      author: "@luxe_lifestyle",
      likes: 8900,
      comments: 256
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",
      title: "How I Style My Diamond Hoops",
      author: "@jewelry_queen",
      likes: 15200,
      comments: 489
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop",
      title: "Anniversary Gift Reveal 💍",
      author: "@couple_goals",
      likes: 10500,
      comments: 378
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50/30 to-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Real Stories, Real Beauty
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            See how our customers style and celebrate with their jewelry pieces
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ugcVideos.map((video) => (
            <Card 
              key={video.id} 
              className="group relative overflow-hidden cursor-pointer aspect-[3/4] bg-black"
              onClick={() => setPlayingVideo(video.id)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                  <p className="text-white font-semibold text-sm line-clamp-2">
                    {video.title}
                  </p>
                  <p className="text-white/80 text-xs">
                    {video.author}
                  </p>
                  <div className="flex items-center gap-4 text-white/90 text-xs">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{(video.likes / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{video.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 rounded-xl"
          >
            <Share2 className="mr-2 w-4 h-4" />
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
}


import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Art of Choosing the Perfect Engagement Ring",
      excerpt: "Discover the timeless elegance and craftsmanship behind selecting an engagement ring that tells your unique love story.",
      author: "Sarah Mitchell",
      date: "January 15, 2024",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop",
      category: "Guide"
    },
    {
      id: 2,
      title: "Caring for Your Precious Jewelry",
      excerpt: "Learn expert tips on maintaining the brilliance and longevity of your fine jewelry pieces with proper care and storage.",
      author: "Michael Chen",
      date: "January 12, 2024",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
      category: "Care Tips"
    },
    {
      id: 3,
      title: "2024 Jewelry Trends: What's Hot This Year",
      excerpt: "Explore the latest trends in luxury jewelry, from statement pieces to minimalist designs that are captivating the fashion world.",
      author: "Emma Rodriguez",
      date: "January 8, 2024",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop",
      category: "Trends"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Jewelry Insights & Stories
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Explore our curated collection of articles, guides, and stories about the world of fine jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <Button
                  variant="link"
                  className="text-amber-600 hover:text-amber-700 p-0 h-auto font-medium"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 rounded-xl"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

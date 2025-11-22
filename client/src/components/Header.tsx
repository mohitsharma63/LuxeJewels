import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Rings", path: "/catalog?category=rings" },
    { name: "Necklaces", path: "/catalog?category=necklaces" },
    { name: "Bracelets", path: "/catalog?category=bracelets" },
    { name: "Earrings", path: "/catalog?category=earrings" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-semibold tracking-tight hover:text-primary transition-colors cursor-pointer" data-testid="link-home">
              LuxeJewels
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" >
              <span
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === "/" ? "text-primary" : "text-foreground/80"
                } cursor-pointer`}
                data-testid="link-home"
              >
                Home
              </span>
            </Link>
            <Link href="/catalog">
              <span
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === "/catalog" ? "text-primary" : "text-foreground/80"
                } cursor-pointer`}
                data-testid="link-catalog"
              >
                Catalog
              </span>
            </Link>
            {categories.map((category) => (
              <Link key={category.path} href={category.path}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === category.path ? "text-primary" : "text-foreground/80"
                  } cursor-pointer`}
                  data-testid={`link-${category.name.toLowerCase()}`}
                >
                  {category.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-secondary/30 rounded-lg px-4 py-2 min-w-[240px]">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
                data-testid="input-search"
              />
            </div>

            <Button size="icon" variant="ghost" className="relative" data-testid="button-cart">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 bg-secondary/30 rounded-lg px-4 py-2">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search jewelry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
                />
              </div>
              <Link href="/">
                <span
                  className={`block text-sm font-medium py-2 ${
                    location === "/" ? "text-primary" : "text-foreground/80"
                  } cursor-pointer`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </span>
              </Link>
              <Link href="/catalog">
                <span
                  className={`block text-sm font-medium py-2 ${
                    location === "/catalog" ? "text-primary" : "text-foreground/80"
                  } cursor-pointer`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Catalog
                </span>
              </Link>
              {categories.map((category) => (
                <Link key={category.path} href={category.path}>
                  <span
                    className={`block text-sm font-medium py-2 ${
                      location === category.path ? "text-primary" : "text-foreground/80"
                    } cursor-pointer`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
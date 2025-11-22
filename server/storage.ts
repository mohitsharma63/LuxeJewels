
import { type User, type InsertUser, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product methods
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.seedProducts();
  }

  private seedProducts() {
    const sampleProducts: Product[] = [
      {
        id: randomUUID(),
        name: "Diamond Solitaire Engagement Ring",
        price: "12500.00",
        category: "rings",
        description: "Timeless 2-carat diamond solitaire set in platinum. Perfect brilliance and clarity.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop",
        model3d: null,
        isVerified: true,
        isNew: true,
        rating: "4.9",
        reviewCount: 247,
        material: "Platinum",
        gemstone: "Diamond"
      },
      {
        id: randomUUID(),
        name: "Ruby Vintage Ring",
        price: "8750.00",
        category: "rings",
        description: "Exquisite vintage-inspired ruby ring with intricate detailing and diamond accents.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop",
        model3d: null,
        isVerified: true,
        isNew: false,
        rating: "4.8",
        reviewCount: 156,
        material: "18K Gold",
        gemstone: "Ruby"
      },
      {
        id: randomUUID(),
        name: "Sterling Silver Infinity Ring",
        price: "450.00",
        category: "rings",
        description: "Elegant infinity design crafted in sterling silver. Symbolizes eternal love.",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop",
        model3d: null,
        isVerified: true,
        isNew: false,
        rating: "4.7",
        reviewCount: 89,
        material: "Sterling Silver",
        gemstone: null
      },
      {
        id: randomUUID(),
        name: "Blue Sapphire Pendant Necklace",
        price: "6200.00",
        category: "necklaces",
        description: "Stunning blue sapphire pendant surrounded by brilliant diamonds on white gold chain.",
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=1000&fit=crop",
        model3d: null,
        isVerified: true,
        isNew: true,
        rating: "4.9",
        reviewCount: 203,
        material: "14K White Gold",
        gemstone: "Sapphire"
      },
      {
        id: randomUUID(),
        name: "Layered Gold Chain Necklace",
        price: "1850.00",
        category: "necklaces",
        description: "Modern layered design in 18K gold. Perfect for everyday elegance.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop",
        model3d: null,
        isVerified: true,
        isNew: false,
        rating: "4.6",
        reviewCount: 134,
        material: "18K Gold",
        gemstone: null
      },
      {
        id: randomUUID(),
        name: "Emerald Tennis Bracelet",
        price: "9400.00",
        category: "bracelets",
        description: "Luxurious emerald tennis bracelet set in platinum. Classic and sophisticated.",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop",
        model3d: null,
        isVerified: true,
        isNew: true,
        rating: "4.9",
        reviewCount: 178,
        material: "Platinum",
        gemstone: "Emerald"
      },
      {
        id: randomUUID(),
        name: "Classic Pearl Bracelet",
        price: "3200.00",
        category: "bracelets",
        description: "Timeless freshwater pearl bracelet with gold clasp. Elegant and refined.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop",
        model3d: null,
        isVerified: true,
        isNew: false,
        rating: "4.7",
        reviewCount: 92,
        material: "14K Gold",
        gemstone: "Pearl"
      },
      {
        id: randomUUID(),
        name: "Diamond Pavé Hoop Earrings",
        price: "5600.00",
        category: "earrings",
        description: "Brilliant diamond pavé hoop earrings in white gold. Sophisticated sparkle.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop",
        model3d: null,
        isVerified: true,
        isNew: true,
        rating: "4.8",
        reviewCount: 165,
        material: "14K White Gold",
        gemstone: "Diamond"
      },
      {
        id: randomUUID(),
        name: "Platinum Diamond Stud Earrings",
        price: "7800.00",
        category: "earrings",
        description: "Classic diamond studs in platinum setting. Perfect everyday luxury.",
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=1000&fit=crop",
        model3d: null,
        isVerified: true,
        isNew: false,
        rating: "4.9",
        reviewCount: 312,
        material: "Platinum",
        gemstone: "Diamond"
      }
    ];

    sampleProducts.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
}

export const storage = new MemStorage();

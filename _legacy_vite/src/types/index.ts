// Types: FaceStore

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  comparePrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  tags: string[];
  inStock: boolean;
  stockQuantity?: number;
  sku: string;
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  attributes?: Record<string, string>;
  rating: number;
  reviewCount: number;
  seller: {
    id: string;
    name: string;
    rating: number;
  };
  isFeatured?: boolean;
  isNew?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  order: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: {
    size?: string;
    color?: string;
  };
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  phone?: string;
  addresses: Address[];
  wishlist: string[];
  createdAt: string;
}

export interface Address {
  id: string;
  name: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
  trackingCode?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  variant?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  helpful: number;
  verifiedPurchase: boolean;
  createdAt: string;
}

export interface Partner {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  description: string;
  website?: string;
  email: string;
  phone?: string;
  address?: string;
  category: string;
  productsCount: number;
  rating: number;
  isVerified: boolean;
  joinedAt: string;
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

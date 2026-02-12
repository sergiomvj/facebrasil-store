// Store: Cart State Management (Zustand)
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Cart, CartItem, Product } from '@types/index';

interface CartState extends Cart {
  // Actions
  addItem: (product: Product, quantity?: number, variant?: CartItem['variant']) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
}

const calculateTotals = (items: CartItem[]): Omit<Cart, 'items'> => {
  const subtotal = items.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);
  
  const shipping = subtotal > 100 ? 0 : 15; // Free shipping over $100
  const discount = 0; // Calculate discounts here
  const total = subtotal + shipping - discount;
  
  return {
    subtotal,
    shipping,
    discount,
    total,
  };
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      subtotal: 0,
      shipping: 0,
      discount: 0,
      total: 0,
      
      addItem: (product, quantity = 1, variant) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.product.id === product.id && 
                      JSON.stringify(item.variant) === JSON.stringify(variant)
          );
          
          let newItems;
          if (existingIndex >= 0) {
            newItems = [...state.items];
            newItems[existingIndex].quantity += quantity;
          } else {
            newItems = [...state.items, { product, quantity, variant }];
          }
          
          return {
            items: newItems,
            ...calculateTotals(newItems),
          };
        });
      },
      
      removeItem: (productId: string) => {
        set((state) => {
          const newItems = state.items.filter(
            (item) => item.product.id !== productId
          );
          return {
            items: newItems,
            ...calculateTotals(newItems),
          };
        });
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        set((state) => {
          if (quantity <= 0) {
            const newItems = state.items.filter(
              (item) => item.product.id !== productId
            );
            return {
              items: newItems,
              ...calculateTotals(newItems),
            };
          }
          
          const newItems = state.items.map((item) =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          );
          
          return {
            items: newItems,
            ...calculateTotals(newItems),
          };
        });
      },
      
      clearCart: () => {
        set({
          items: [],
          subtotal: 0,
          shipping: 0,
          discount: 0,
          total: 0,
        });
      },
      
      isInCart: (productId: string) => {
        return get().items.some((item) => item.product.id === productId);
      },
    }),
    {
      name: 'facestore-cart',
    }
  )
);

// Hook helper for cart count
export const useCartCount = () => {
  return useCartStore((state) => 
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );
};

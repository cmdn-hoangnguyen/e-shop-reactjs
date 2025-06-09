import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { toast } from 'react-toastify';

import { voucherData } from '../constants/data';
import type { Cart, CartItem } from '../constants/types';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const CartContext = createContext<Cart | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, getCart] = useState<CartItem[]>([]);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const data = getLocalStorage<CartItem[]>('cart') || [];
    getCart(data);
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    setLocalStorage<CartItem[]>('cart', cart);
  }, [cart]);

  const addToCart = (selectedProduct: CartItem): void => {
    const existingProduct = cart.find((item) => item.id === selectedProduct.id);
    let updatedCart: CartItem[];

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === selectedProduct.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, selectedProduct];
    }

    getCart(updatedCart);
    toast.success('Product added to cart successfully!');
  };

  const formatValue = (value: number): number => {
    return parseFloat(value.toFixed(2));
  };

  const discountPrice = (product: CartItem): number => {
    return formatValue(product?.price * (1 - product?.discount));
  };

  const calculateTotal = (price: number, quantity: number): number => {
    return formatValue(price * quantity);
  };

  const calculateCartTotal = (inputValue: string): number => {
    let voucher = 0;

    if (inputValue) {
      voucher = voucherData[inputValue] || 0;
    }

    const total = cart?.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    return formatValue(total * (1 - voucher));
  };

  const deleteItem = (productId: number): void => {
    const isConfirmed = window.confirm('Do you want to delete this product?');

    if (isConfirmed) {
      const updatedCart = cart.filter((item) => item.id !== productId);
      getCart(updatedCart);

      toast.success('Product removed from cart successfully!');

      return setLocalStorage<CartItem[]>('cart', updatedCart);
    }

    toast.info('Canceled removing product from cart.');
  };

  const updateItemQuantity = (productId: number, quantity: number): void => {
    getCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteItem,
        discountPrice,
        calculateTotal,
        calculateCartTotal,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

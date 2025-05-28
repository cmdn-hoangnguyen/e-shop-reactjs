import type { JSX } from 'react';

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Image {
  url: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: Image;
  discount: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  deleteItem: (productId: number) => void;
  discountPrice: (product: CartItem) => number;
  calculateTotal: (price: number, quantity: number) => number;
  calculateCartTotal: (inputValue: string) => number;
  updateItemQuantity: (productId: number, quantity: number) => void;
}

export interface PromotionItem {
  id: number;
  image: Image;
  title: string;
  buttonLabel: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ActionItem {
  id: string;
  iconClass: string;
  href: string;
  ariaLabel: string;
}

export interface tableColumnItem {
  title: string | number | JSX.Element;
  className: string;
}

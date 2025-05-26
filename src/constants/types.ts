export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  alt: string;
  discount: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  cart: CartItem[];
  cartAmount: HTMLElement | null;
  cartTable: HTMLElement | null;
  cartSummaryTotal: HTMLElement | null;
  cartSummaryList: HTMLElement | null;
  discountPrice: (price: number, discount: number) => number;
  totalPrice: (price: number, quantity: number) => number;
  cartTotal: () => number;
}

export interface PromotionItem {
  image: string;
  alt: string;
  title: string;
  buttonLabel: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ActionItem {
  iconClass: string;
  href: string;
  ariaLabel: string;
}

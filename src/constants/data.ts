import { ERROR_TYPE } from './enum';
import type { ActionItem, NavItem, PromotionItem, Service, tableColumnItem } from './types';

export const featuresData: Service[] = [
  {
    icon: 'feature-icon icon-delivery',
    title: 'Free Shipping',
    description: 'On purchases over $199',
  },
  {
    icon: 'feature-icon icon-happy',
    title: '99% Satisfied Customers',
    description: "Our clients' opinions speak for themselves",
  },
  {
    icon: 'feature-icon icon-guarantee',
    title: 'Originality Guaranteed',
    description: '30 days warranty for each product from our store',
  },
];

export const valuesData: Service[] = [
  {
    icon: 'icon-large icon-large-delivery',
    title: 'Free Shipping',
    description:
      'All purchases over $199 are eligible for free shipping via USPS First Class Mail.',
  },
  {
    icon: 'icon-large icon-large-transaction',
    title: 'Easy Payments',
    description: 'All payments are processed instantly over a secure payment protocol.',
  },
  {
    icon: 'icon-large icon-large-guarantee',
    title: 'Money-Back Guarantee',
    description:
      "If an item arrived damaged or you've changed your mind, you can send it back for a full refund.",
  },
  {
    icon: 'icon-large icon-large-material',
    title: 'Finest Quality',
    description:
      'Designed to last, each of our products has been crafted with the finest materials.',
  },
];

export const promotionsData: PromotionItem[] = [
  {
    id: 1,
    image: {
      url: '/images/promotion-arrival.png',
      alt: 'New arrivals',
    },
    title: 'New arrivals are now in!',
    buttonLabel: 'SHOW COLLECTION',
  },
  {
    id: 2,
    image: {
      url: '/images/promotion-tshirt.png',
      alt: 'promotion tshirt',
    },
    title: 'Basic t-shirts\n$29,99',
    buttonLabel: 'MORE DETAILS',
  },
  {
    id: 3,
    image: {
      url: '/images/promotion-sale.png',
      alt: 'promotion sale',
    },
    badge: '-50%',
    title: 'Sale this\nsummer',
    buttonLabel: 'VIEW ALL',
  },
];

export const navigationListItems: NavItem[] = [
  {
    label: 'Men',
    href: '/#',
  },
  {
    label: 'Women',
    href: '/#',
  },
  {
    label: 'Kids',
    href: '/#',
  },
];

export const headerActionListItems: ActionItem[] = [
  {
    id: 'search',
    iconClass: 'icon-search',
    href: '/#',
    ariaLabel: 'Search',
  },
  {
    id: 'cart',
    iconClass: 'icon-cart',
    href: '/cart',
    ariaLabel: 'Cart',
  },
  {
    id: 'user',
    iconClass: 'icon-user',
    href: '/#',
    ariaLabel: 'User',
  },
];

export const socialLinks: Omit<ActionItem, 'ariaLabel' | 'id'>[] = [
  { iconClass: 'social-icon icon-facebook', href: '/#' },
  { iconClass: 'social-icon icon-instagram', href: '/#' },
  { iconClass: 'social-icon icon-linkedin', href: '/#' },
  { iconClass: 'social-icon icon-youtube', href: '/#' },
  { iconClass: 'social-icon icon-tiktok', href: '/#' },
];

export const shoppingOnlineLinks: NavItem[] = [
  { label: 'Order Status', href: '/#' },
  { label: 'Shipping and Delivery', href: '/#' },
  { label: 'Returns', href: '/#' },
  { label: 'Payment Options', href: '/#' },
  { label: 'Contact Us', href: '/#' },
];

export const informationLinks: NavItem[] = [
  { label: 'Gift Cards', href: '/#' },
  { label: 'Find a store', href: '/#' },
  { label: 'Newsletter', href: '/#' },
  { label: 'Become a member', href: '/#' },
  { label: 'Site feedback', href: '/#' },
];

export const contactInfo: NavItem[] = [
  { label: 'store@uikit.com', href: 'mailto:store@uikit.com' },
  { label: 'Hotline: +1 131 138 138', href: 'tel:+1131138138' },
];

export const footerTopContent: { title: string; links: NavItem[] }[] = [
  {
    title: 'Shopping online',
    links: shoppingOnlineLinks,
  },
  {
    title: 'Information',
    links: informationLinks,
  },
  {
    title: 'Contact',
    links: contactInfo,
  },
];

export const cartTableItems: tableColumnItem[] = [
  { title: 'No', className: 'col-lg-1' },
  { title: 'Product', className: 'col-lg-3' },
  { title: 'Detail info', className: 'col-lg-3' },
  { title: 'Quantity', className: 'col-lg-3' },
  { title: 'Total', className: 'col-lg-2' },
];

export const voucherData: { [key: string]: number } = {
  classmethod: 0.3,
  hoang: 0.99,
};

export const errorData = {
  [ERROR_TYPE.PAGE]: {
    image: {
      url: '/images/not-found.png',
      alt: 'Not found',
    },
  },
  [ERROR_TYPE.PRODUCT]: {
    image: {
      url: '/images/empty-cart.png',
      alt: 'Empty cart',
    },
  },
};

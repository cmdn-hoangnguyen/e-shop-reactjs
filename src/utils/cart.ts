import { voucherData } from '../constants/data';
import type { CartItem } from '../constants/types';
import { formatValue } from './common';

export const discountPrice = (product: CartItem): number => {
  return formatValue(product?.price * (1 - product?.discount));
};

export const calculateTotal = (price: number, quantity: number): number => {
  return formatValue(price * quantity);
};

export const calculateCartTotal = (inputValue: string, cart: CartItem[]): number => {
  let voucher = 0;

  if (inputValue) {
    voucher = voucherData[inputValue] || 0;
  }

  const total = cart?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return formatValue(total * (1 - voucher));
};

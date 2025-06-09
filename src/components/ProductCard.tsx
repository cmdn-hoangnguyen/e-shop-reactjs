import type { JSX } from 'react';

import { Badge } from './Badge';
import { Button } from './Button';
import { BADGE_THEME, BUTTON_THEME, COLOR_THEME, TOAST_MESSAGE } from '../constants/enum';
import type { CartItem, Product } from '../constants/types';
import { discountPrice } from '../utils/cart';
import { addToCart } from '../redux/actions/cartActions';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleAddToCart = (): void => {
    const quantity: number = 1;
    const cartItem: CartItem = {
      ...product,
      quantity,
    };

    dispatch(addToCart(cartItem));
    toast.success(TOAST_MESSAGE.SUCCESS_ADD_PRODUCT_TO_CART);
  };

  return (
    <div className="product-content-wrapper d-flex-col">
      <a className="product-content d-flex-col" href="/#">
        <div className="card-image-wrapper product-image-wrapper">
          <img
            className="card-image product-image"
            src={product?.image?.url}
            alt={product?.image?.alt}
          />
        </div>

        <div className="product-detail d-flex-col">
          <h3 className="product-detail-name">{product?.name}</h3>
          <div className="d-flex justify-between">
            {product.discount ? (
              <>
                <strong className="product-price high-light">
                  ${discountPrice(product as CartItem)}
                </strong>
                <s className="product-price-slashed">${product.price}</s>
              </>
            ) : (
              <strong className="product-price">${discountPrice(product as CartItem)}</strong>
            )}
          </div>
        </div>

        {!!product?.discount && (
          <Badge
            variant={BADGE_THEME.DEFAULT}
            color={COLOR_THEME.DANGER}
            text={`-${product?.discount * 100}%`}
          />
        )}
      </a>

      <Button
        variant={BUTTON_THEME.ROUNDED_OUTLINE_BUTTON}
        label="Add to cart"
        onClick={handleAddToCart}
      />
    </div>
  );
};

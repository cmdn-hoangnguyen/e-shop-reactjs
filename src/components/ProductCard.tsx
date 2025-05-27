import type { JSX } from "react";
import type { CartItem, Product } from "../constants/types";
import { Button } from "./Button";
import { useCartContext } from "../contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const { addToCart, discountPrice } = useCartContext();

  const handleAddToCart = (): void => {
    const quantity: number = 1;
    const cartItem: CartItem = {
      ...product,
      quantity,
    };

    addToCart(cartItem);
  };

  return (
    <div className="product-content-wrapper d-flex-col">
      <a className="product-content d-flex-col" href="/#">
        <div className="card-image-wrapper product-image-wrapper">
          <img
            className="card-image product-image"
            src={product?.image}
            alt={product?.alt}
          />
        </div>

        <div className="product-detail d-flex-col">
          <h3 className="product-detail-name">{product?.name}</h3>
          <div className="d-flex justify-between">
            {!!product.discount ? (
              <>
                <strong className="product-price high-light">
                  ${discountPrice(product as CartItem)}
                </strong>
                <s className="product-price-slashed">${product.price}</s>
              </>
            ) : (
              <strong className="product-price">
                ${discountPrice(product as CartItem)}
              </strong>
            )}
          </div>
        </div>

        {!!product?.discount && (
          <span className="badge badge-danger d-flex items-center justify-center">
            -{product?.discount * 100}%
          </span>
        )}
      </a>

      <Button label="Add to cart" onClick={handleAddToCart} />
    </div>
  );
};

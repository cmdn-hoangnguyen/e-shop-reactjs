import { type JSX } from 'react';

import { Button } from './Button';
import { IconWrapper } from './IconWrapper';
import { BUTTON_THEME, COLOR_THEME } from '../constants/enum';
import type { CartItem } from '../constants/types';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';
import { deleteItemFromCart, updateItemQuantity } from '../redux/thunks/cartThunk';
import { calculateTotal, discountPrice } from '../utils/cart';

interface TableBodyCellProps {
  item: CartItem;
  colIndex: number;
  index: number;
}

export const TableBodyCell = ({ item, colIndex, index }: TableBodyCellProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(updateItemQuantity(item?.id, item?.quantity + 1));
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateItemQuantity(item?.id, item?.quantity - 1));
    } else {
      handleDeleteItem();
    }
  };

  const handleDeleteItem = () => {
    dispatch(deleteItemFromCart(item?.id));
  };

  const renderCellContent = (): JSX.Element => {
    switch (colIndex) {
      case 0:
        return <>{index + 1}.</>;

      case 1:
        return (
          <div className="cart-item-image-wrapper">
            <img className="cart-item-image" src={item?.image?.url} alt={item.name} />

            <Button
              className="button-delete"
              variant={BUTTON_THEME.FULL_ROUNDED}
              label={<IconWrapper iconClass="icon-trash" />}
              onClick={handleDeleteItem}
            />
          </div>
        );

      case 2:
        return (
          <div className="cart-item-content d-flex-col justify-center">
            <h3 className="cart-item-name">{item?.name}</h3>
            <div className="cart-item-price d-flex">
              <span className="cart-item-price-final color-primary">${discountPrice(item)}</span>
              {!!item?.discount && <s className="cart-item-price-original">{item?.price}</s>}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="cart-item-content cart-item-actions d-flex items-center">
            <Button
              className="button-quantity decrease-btn"
              variant={BUTTON_THEME.FULL_ROUNDED}
              color={COLOR_THEME.SECONDARY}
              label="-"
              onClick={handleDecreaseQuantity}
            />

            <p className="cart-item-quantity">{item.quantity}</p>

            <Button
              className="button-quantity increase-btn"
              variant={BUTTON_THEME.FULL_ROUNDED}
              color={COLOR_THEME.SECONDARY}
              label="+"
              onClick={handleIncreaseQuantity}
            />
          </div>
        );

      case 4:
        return (
          <div className="cart-item-content d-flex items-center">
            <p className="cart-item-total-price color-primary">
              ${calculateTotal(item?.price, item?.quantity)}
            </p>
          </div>
        );

      default:
        return <></>;
    }
    1;
  };

  return renderCellContent();
};

import type { JSX } from 'react';

import { IconWrapper } from './IconWrapper';
import type { CartItem } from '../constants/types';
import { useCartContext } from '../contexts/CartContext';

interface TableBodyCellProps {
	item: CartItem;
	colIndex: number;
	index: number;
}

export const TableBodyCell = ({ item, colIndex, index }: TableBodyCellProps): JSX.Element => {
	const { discountPrice, calculateTotal, deleteItem, updateItemQuantity } = useCartContext();

	const handleIncreaseQuantity = () => {
		updateItemQuantity(item.id, item.quantity + 1);
	};

	const handleDecreaseQuantity = () => {
		if (item.quantity > 1) {
			updateItemQuantity(item.id, item.quantity - 1);
		} else {
			handleDeleteItem();
		}
	};

	const handleDeleteItem = () => {
		deleteItem(item?.id);
	};

	const renderCellContent = (): JSX.Element => {
		switch (colIndex) {
			case 0:
				return <>{index + 1}.</>;
			case 1:
				return (
					<div className="cart-item-image-wrapper">
						<img className="cart-item-image" src={item?.image?.url} alt={item.name} />

						<button className="button-delete" onClick={handleDeleteItem}>
							<IconWrapper iconClass="icon-trash" />
						</button>
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
						<button className="button-quantity decrease-btn" onClick={handleDecreaseQuantity}>
							-
						</button>
						<p className="cart-item-quantity">{item.quantity}</p>
						<button className="button-quantity increase-btn" onClick={handleIncreaseQuantity}>
							+
						</button>
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
	};

	return renderCellContent();
};

import { useEffect, useState, type ChangeEvent } from 'react';

import clsx from 'clsx';

import { Button } from '../../../../components/Button';
import { cartTableItems } from '../../../../constants/data';
import { BUTTON_THEME, COLOR_THEME } from '../../../../constants/enum';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../redux/store';
import { getItemsFromLocalStorage } from '../../../../redux/thunks/cartThunk';
import { useAppDispatch } from '../../../../redux/hooks/useAppDispatch';
import { TableBodyCell } from '../../../../components/TableBodyCell';
import type { CartItem } from '../../../../constants/types';

const Cart: React.FC = () => {
  // const { cart, calculateTotal, calculateCartTotal } = useCartContext();

  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  const [inputValue, setInputValue] = useState<string>('');

  const handOnInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value.toLowerCase());
  };

  useEffect(() => {
    dispatch(getItemsFromLocalStorage());
  }, []);

  return (
    <main className="main">
      <section className="section-cart">
        <div className="container">
          <div className="cart-layout d-grid">
            <div className="cart-layout-wrapper col-lg-9 col-md-12">
              <div className="section-cart-header d-flex justify-between items-end">
                <h2 className="section-title section-cart-title">Shopping cart</h2>
                <span id="cart-amount">
                  {cart?.length === 1 ? '1 Item' : `${cart?.length} Items`}
                </span>
              </div>

              <table className="cart-table d-flex-col">
                <thead className="cart-table-head">
                  <tr className="cart-table-head-row d-grid">
                    {cartTableItems?.map((header, index) => (
                      <th className={clsx('cart-table-head-item', header.className)} key={index}>
                        {header.title}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="cart-table-body">
                  {cart?.length ? (
                    cart?.map((item: CartItem, index: number) => (
                      <tr className="cart-table-body-row d-grid" key={item?.id}>
                        {cartTableItems?.map((col, colIndex) => (
                          <td className={clsx('cart-item', col.className)} key={colIndex}>
                            <TableBodyCell item={item} colIndex={colIndex} index={index} />
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr className="cart-empty-item">
                      <td className="cart-empty-text">Cart is empty!</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <aside className="cart-summary col-lg-3 col-md-12">
              <div className="cart-summary-content d-flex-col justify-center">
                <h4 className="cart-summary-title">Order Summary</h4>

                <ul className="cart-summary-list d-flex-col">
                  {cart?.map((item: CartItem) => (
                    <li className="cart-summary-item" key={item?.id}>
                      <div className="cart-summary-item-content d-flex justify-between items-center">
                        <div className="d-flex">
                          <span className="cart-summary-item-name">{item.name}</span>
                          <span className="cart-summary-quantity">x{item.quantity}</span>
                        </div>
                        <span className="cart-item-value">
                          {/* ${calculateTotal(item?.price, item?.quantity)} */}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <form action="" className="cart-summary-voucher d-flex justify-between">
                  <input
                    className="voucher-input"
                    id="voucher-input"
                    type="text"
                    value={inputValue}
                    placeholder="Enter code..."
                    onChange={(event) => handOnInputChange(event)}
                  />
                </form>

                <div className="cart-summary-total">
                  <p className="cart-summary-total-detail d-flex justify-between items-center">
                    Cart total:
                    <span className="cart-summary-total-detail-value">
                      {/* ${calculateCartTotal(inputValue)} */}
                    </span>
                  </p>
                </div>

                <Button
                  variant={BUTTON_THEME.ROUNDED_BUTTON}
                  color={COLOR_THEME.PRIMARY}
                  className="button-checkout"
                  label="Checkout"
                  onClick={() => {}}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;

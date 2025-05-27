import clsx from "clsx";
import { cartTableItems } from "../../../../constants/data";
import { useCartContext } from "../../../../contexts/CartContext";
import { TableBodyCell } from "../../../../components/TableBodyCell";
import type { CartItem } from "../../../../constants/types";
import { Button } from "../../../../components/Button";
import { useState, type ChangeEvent } from "react";

const Cart = () => {
  const { cart, calculateTotal, calculateCartTotal } = useCartContext();

  const [inputValue, setInputValue] = useState<string>("");

  const handOnInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value.toLowerCase());
  };

  return (
    <main className="main">
      <section className="section-cart">
        <div className="container">
          <div className="cart-layout d-grid">
            <div className="cart-layout-wrapper col-lg-9 col-md-12">
              <div className="section-cart-header d-flex justify-between items-end">
                <h2 className="section-title section-cart-title">
                  Shopping cart
                </h2>
                <span id="cart-amount"></span>
              </div>

              <table className="cart-table d-flex-col">
                <thead className="cart-table-head">
                  <tr className="cart-table-head-row d-grid">
                    {cartTableItems?.map((header, index) => (
                      <th
                        className={clsx(
                          "cart-table-head-item",
                          header.className
                        )}
                        key={index}
                      >
                        {header.title}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="cart-table-body">
                  {!!cart?.length ? (
                    cart?.map((item: CartItem, index: number) => (
                      <tr className="cart-table-body-row d-grid" key={item?.id}>
                        {cartTableItems?.map((col, colIndex) => (
                          <td
                            className={clsx("cart-item", col.className)}
                            key={colIndex}
                          >
                            <TableBodyCell
                              item={item}
                              colIndex={colIndex}
                              index={index}
                            />
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>Cart is empty!</tr>
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
                          <span className="cart-summary-item-name">
                            {item.name}
                          </span>
                          <span className="cart-summary-quantity">
                            x{item.quantity}
                          </span>
                        </div>
                        <span className="cart-item-value">
                          ${calculateTotal(item?.price, item?.quantity)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <form
                  action=""
                  className="cart-summary-voucher d-flex justify-between"
                >
                  <input
                    className="voucher-input"
                    id="voucher-input"
                    type="text"
                    placeholder="Enter code..."
                    value={inputValue}
                    onChange={(event) => handOnInputChange(event)}
                  />
                </form>

                <div className="cart-summary-total">
                  <p className="cart-summary-total-detail d-flex justify-between items-center">
                    Cart total:
                    <span className="cart-summary-total-detail-value">
                      ${calculateCartTotal(inputValue)}
                    </span>
                  </p>
                </div>

                <Button
                  className="button-checkout"
                  label="Checkout"
                  onClick={() => {}}
                  isPrimary
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

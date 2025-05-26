import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import { NavigateButton } from "../../../../components/NavigateButton";
import { ProductCard } from "../../../../components/ProductCard";
import { PromotionCard } from "../../../../components/PromotionCard";
import { ServiceItem } from "../../../../components/ServiceItem";

import {
  featuresData,
  promotionsData,
  valuesData,
} from "../../../../constants/data";
import { MAIN_CONTENT } from "../../../../constants/enum";
import type { Cart, CartItem, Service } from "../../../../constants/types";
import { useProduct } from "../../../../hooks/useProduct";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../../utils/localStorage";

const Home = () => {
  const { products } = useProduct();

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const data = getLocalStorage<CartItem[]>("cart") || [];
    setCart(data);
  }, []);

  useEffect(() => {
    setLocalStorage<CartItem[]>("cart", cart);
  }, [cart]);

  const handleAddToCart = (selectedProduct: CartItem) => {
    const existingProduct = cart.find((item) => item.id === selectedProduct.id);
    let updatedCart: CartItem[];

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === selectedProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, selectedProduct];
    }

    setCart(updatedCart);
  };

  return (
    <main className="main">
      <section className="section section-hero">
        <div className="hero-background">
          <div className="hero-heading hero-content-layout d-flex-col justify-center">
            <h2 className="section-hero-title d-flex-col">
              Sale of the
              <span className="color-primary">summer</span>
              collection
            </h2>

            <a
              href="/#"
              className="section-hero-navigation d-flex items-center"
            >
              <span className="circle-background d-flex items-center justify-center">
                <i className="icon icon-arrow-right"></i>
              </span>
              SHOP NOW
            </a>
          </div>

          <div className="feature-layout hero-content-layout d-flex items-center">
            <ul className="feature-list d-grid">
              {!!featuresData?.length &&
                featuresData?.map((feature: Service, index: number) => (
                  <li className="feature-item col-lg-4 col-md-12" key={index}>
                    <ServiceItem
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      mainContent={MAIN_CONTENT.FEATURE}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-promotion">
        <div className="container">
          <ul className="d-grid promotion-list">
            {!!promotionsData?.length &&
              promotionsData?.map((promotion, index) => (
                <li
                  className={`card promotion-item ${
                    index === 0 ? "col-lg-6 col-md-12" : "col-lg-3 col-md-6"
                  }`}
                  key={index}
                >
                  <PromotionCard promotion={promotion} index={index} />
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="section section-selected-products">
        <div className="container">
          <div className="section-content d-flex-col">
            <div className="section-selected-header d-flex items-center justify-between">
              <h2 className="section-title">Selected just for you</h2>

              <NavigateButton
                className="button-bordered"
                label="SHOW MORE"
                href="/#"
                isButtonRole
              />
            </div>

            <ul className="d-grid product-list">
              {!!products?.length &&
                products?.map((product, index) => (
                  <li
                    className="card product-item col-lg-3 col-md-6"
                    key={index}
                  >
                    <ProductCard
                      product={product}
                      onClick={(selectedProduct) =>
                        handleAddToCart(selectedProduct)
                      }
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-sub section-values">
        <div className="container">
          <div className="section-content d-flex-col">
            <h2 className="section-title">Why should you choose us?</h2>

            <ul className="d-grid value-list">
              {!!valuesData.length &&
                valuesData?.map((value: Service, index: number) => (
                  <li
                    className="value-item col-lg-3 col-md-6 col-sm-12"
                    key={index}
                  >
                    <ServiceItem
                      icon={value.icon}
                      title={value.title}
                      description={value.description}
                      mainContent={MAIN_CONTENT.VALUE}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-products">
        <div className="container">
          <div className="section-content d-flex-col">
            <h2 className="section-title">Product in today</h2>

            <ul className="d-grid product-list">
              {!!products?.length &&
                products?.map((product, index) => (
                  <li
                    className="card product-item col-lg-3 col-md-6"
                    key={index}
                  >
                    <ProductCard
                      product={product}
                      onClick={(selectedProduct) =>
                        handleAddToCart(selectedProduct)
                      }
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-subscribe">
        <div className="container">
          <div className="section-content d-flex items-center">
            <div className="subscribe-content d-grid items-center justify-items-end">
              <div className="col-lg-6 col-md-12">
                <h2 className="subscribe-title">
                  Subscribe to our newsletter and receive exclusive offers every
                  week
                </h2>
              </div>

              <form
                action="/#"
                className="subscribe-form col-lg-6 col-md-12 d-flex"
              >
                <input
                  className="input-subscribe"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />

                <Button label="SUBSCRIBE" onClick={() => {}} isPrimary />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

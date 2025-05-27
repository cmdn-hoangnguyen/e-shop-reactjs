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
import type {
  Product,
  PromotionItem,
  Service,
} from "../../../../constants/types";
import { useProduct } from "../../../../hooks/useProduct";
import clsx from "clsx";
import { SectionLayout } from "./components/SectionLayout";

const Home = () => {
  const { products } = useProduct();

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

      <SectionLayout sectionClass="section-promotion">
        <ul className="d-grid promotion-list">
          {!!promotionsData?.length &&
            promotionsData?.map((promotion: PromotionItem, index: number) => (
              <li
                className={clsx(
                  "card promotion-item",
                  index === 0 ? "col-lg-6 col-md-12" : "col-lg-3 col-md-6"
                )}
                key={index}
              >
                <PromotionCard promotion={promotion} index={index} />
              </li>
            ))}
        </ul>
      </SectionLayout>

      <SectionLayout
        title={
          <div className="section-selected-header d-flex items-center justify-between">
            <h2 className="section-title">Selected just for you</h2>

            <NavigateButton
              className="button-bordered"
              label="SHOW MORE"
              href="/#"
              isButtonRole
            />
          </div>
        }
        sectionClass="section-selected-products"
      >
        <ul className="d-grid product-list">
          {!!products?.length &&
            products?.map((product: Product) => (
              <li
                className="card product-item col-lg-3 col-md-6"
                key={product?.id}
              >
                <ProductCard product={product} />
              </li>
            ))}
        </ul>
      </SectionLayout>

      <SectionLayout
        title="Why should you choose us?"
        sectionClass="section-sub section-values"
      >
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
      </SectionLayout>

      <SectionLayout title="Product in today" sectionClass="section-products">
        <ul className="d-grid product-list">
          {!!products?.length &&
            products?.map((product: Product) => (
              <li
                className="card product-item col-lg-3 col-md-6"
                key={product?.id}
              >
                <ProductCard product={product} />
              </li>
            ))}
        </ul>
      </SectionLayout>

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

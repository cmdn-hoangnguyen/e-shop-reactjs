import clsx from 'clsx';

import { SectionLayout } from './components/SectionLayout';
import { Button } from '../../../../components/Button';
import { IconWrapper } from '../../../../components/IconWrapper';
import { ProductList } from '../../../../components/ProductList';
import { PromotionCard } from '../../../../components/PromotionCard';
import { ServiceList } from '../../../../components/ServiceList';
import { featuresData, promotionsData, valuesData } from '../../../../constants/data';
import { BUTTON_THEME, COLOR_THEME, MAIN_CONTENT } from '../../../../constants/enum';
import type { PromotionItem } from '../../../../constants/types';
import { useGetProduct } from '../../../../hooks/useGetProduct';

const Home: React.FC = () => {
  const { products } = useGetProduct();

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

            <a href="/#" className="section-hero-navigation d-flex items-center">
              <span className="circle-background d-flex items-center justify-center">
                <IconWrapper iconClass="icon-arrow-right" />
              </span>
              SHOP NOW
            </a>
          </div>

          <div className="feature-layout hero-content-layout d-flex items-center">
            <ul className="feature-list d-grid">
              <ServiceList
                itemClass="feature-item col-lg-4 col-md-12"
                data={featuresData}
                type={MAIN_CONTENT.FEATURE}
              />
            </ul>
          </div>
        </div>
      </section>

      <SectionLayout sectionClass="section-promotion">
        {promotionsData?.map((promotion: PromotionItem, index: number) => (
          <li
            className={clsx(
              'card promotion-item',
              index === 0 ? 'col-lg-6 col-md-12' : 'col-lg-3 col-md-6'
            )}
            key={promotion.id}
          >
            <PromotionCard promotion={promotion} index={index} />
          </li>
        ))}
      </SectionLayout>

      <SectionLayout
        sectionClass="section-selected-products"
        title={
          <div className="section-selected-header d-flex items-center justify-between">
            <h2 className="section-title">Selected just for you</h2>

            <Button
              variant={BUTTON_THEME.ROUNDED_OUTLINE_BUTTON}
              label="SHOW MORE"
              href="/#"
              isButtonRole
            />
          </div>
        }
      >
        <ProductList products={products} />
      </SectionLayout>

      <SectionLayout sectionClass="section-sub section-values" title="Why should you choose us?">
        <ServiceList
          itemClass="value-item col-lg-3 col-md-6 col-sm-12"
          data={valuesData}
          type={MAIN_CONTENT.VALUE}
        />
      </SectionLayout>

      <SectionLayout sectionClass="section-products" title="Product in today">
        <ProductList products={products} />
      </SectionLayout>

      <section className="section section-subscribe">
        <div className="container">
          <div className="section-content d-flex items-center">
            <div className="subscribe-content d-grid items-center justify-items-end">
              <div className="col-lg-6 col-md-12">
                <h2 className="subscribe-title">
                  Subscribe to our newsletter and receive exclusive offers every week
                </h2>
              </div>

              <form action="/#" className="subscribe-form col-lg-6 col-md-12 d-flex">
                <input
                  className="input-subscribe"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Email"
                />

                <Button
                  variant={BUTTON_THEME.ROUNDED_BUTTON}
                  color={COLOR_THEME.PRIMARY}
                  label="SUBSCRIBE"
                  onClick={() => {}}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

import { ProductCard } from './ProductCard';
import type { Product } from '../constants/types';

export const ProductList = ({ products }: { products: Product[] }) => {
  if (!products.length) {
    return <li>Empty!</li>;
  }

  return (
    <>
      {products?.map((product: Product) => (
        <li className="card product-item col-lg-3 col-md-6" key={product?.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </>
  );
};

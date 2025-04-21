import { getProducts } from '@/lib/fetch-products';
import FeaturedProductList from '../home/featured-product-list';

export default async function FeaturedProducts() {
  const products = await getProducts();

  return <FeaturedProductList products={products} />;
}

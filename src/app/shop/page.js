import Shop from '@/components/shop/shop.component';
import { CategoriesProvider } from '@/contexts/categories.context';

export default function ShopPage() {
  return (
    <div>
      <CategoriesProvider>
      <Shop />
      </CategoriesProvider>
    </div>
  );
}

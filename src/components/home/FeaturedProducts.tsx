import { formatPrice, getProductImage } from '@/lib/api';
import { siteConfig } from '@/lib/siteConfig';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: any }) => {
  // API has flat structure, no 'attributes' nesting
  const { TenSanPham, Slug, Gia } = product;
  const imageUrl = getProductImage(product);
  
  return (
    <div className="border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <Link href={`/san-pham/${Slug}`}>
        <div className="relative w-full h-56">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={TenSanPham}
              fill
              unoptimized
              style={{ objectFit: 'cover' }}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
          )}
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            <Link href={`/san-pham/${Slug}`} className="hover:text-green-600 transition-colors">{TenSanPham}</Link>
        </h3>

        <div className="flex justify-between items-center">
          <span className="font-bold text-green-600">{formatPrice(Gia)}</span>
            <a href={siteConfig.zaloUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-xl hover:bg-green-600 transition-all">
                Liên hệ mua
            </a>
        </div>
      </div>
    </div>
  );
};


const FeaturedProducts = ({ products }: { products: any[] }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sản Phẩm Nổi Bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products && products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/danh-muc" className="inline-block px-8 py-3 font-semibold text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 transition-all">
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

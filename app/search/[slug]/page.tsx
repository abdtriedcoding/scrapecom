import ImageSlider from "@/app/components/ImageSlider";
import { products } from "@/constants";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h3 className="pb-5 font-light">Showing results for 'monitor'</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link href="/">
      <ImageSlider />
      <div className="p-3 sm:p-4">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">
          {product.description}
        </p>
        <p className="text-sm text-gray-500">{product.price}</p>
      </div>
    </Link>
  );
};

import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link
      className={`border rounded-2xl flex flex-col hover:shadow-lg transition duration-200 ease-in-out 
                    ${product.url.includes("url?url=") && "italic"}
                  `}
      key={product.pos}
      prefetch={false}
      href={
        product.url.includes("url?url=")
          ? // Route to External URL
            product.url.split("url?url=")?.[1]
          : // Route to Google Shopping Page & remove any query params
            product.url.split("?")?.[0]
      }
    >
      <div className="p-3 sm:p-4 space-y-1">
        <h3 className="text-sm font-medium">{product.title}</h3>
        <p className="text-sm text-sky-500 line-clamp-1">
          {product.merchant.name}
        </p>
        <p className="text-sm text-gray-500">{product.price_str}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

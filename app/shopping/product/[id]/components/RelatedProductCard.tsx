import { RelatedProduct } from "@/type";
import Link from "next/link";

const RelatedProductCard = ({
  url,
  title,
  rating,
  currency,
  price,
  store,
}: RelatedProduct) => {
  return (
    <Link
      className={`border rounded-2xl flex flex-col hover:shadow-lg transition duration-200 ease-in-out 
                ${url.includes("url?url=") && "italic"}
              `}
      prefetch={false}
      href={
        url.includes("url?url=")
          ? // Route to External URL
            url.split("url?url=")?.[1]
          : // Route to Google Shopping Page & remove any query params
            url.split("?")?.[0]
      }
    >
      <div className="p-3 sm:p-4 space-y-1">
        <h3 className="text-sm font-medium">{title ?? store}</h3>
        <p className="text-sm text-sky-500 line-clamp-1">
          {rating ?? "No Rating"} ⭐
        </p>
        {price && (
          <p className="text-sm font-normal">
            {currency} {price}
          </p>
        )}
      </div>
    </Link>
  );
};

export default RelatedProductCard;

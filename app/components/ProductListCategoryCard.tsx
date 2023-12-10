import Link from "next/link";
import React from "react";

const ProductListCategoryCard = ({
  category,
  imageSrc,
}: {
  category: any;
  imageSrc: any;
}) => {
  return (
    <>
      <Link
        href="/"
        className="group relative block overflow-hidden transition ease-out active:opacity-75 rounded-md"
      >
        <div className="w-68 h-48 relative overflow-hidden rounded-md">
          <img
            src={imageSrc}
            alt={`Product Image - ${category}`}
            className="object-cover w-full h-full rounded-md transform transition ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0 rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-500 group-hover:text-white">
              {category}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductListCategoryCard;

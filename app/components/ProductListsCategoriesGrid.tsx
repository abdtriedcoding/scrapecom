import { cardData } from "@/constants";
import ProductListCategoryCard from "./ProductListCategoryCard";

export default function ProductListsCategoriesGrid() {
  return (
    <>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {cardData.map((data,index) => (
          <ProductListCategoryCard key={index} {...data} />
        ))}
      </div>
    </>
  );
}

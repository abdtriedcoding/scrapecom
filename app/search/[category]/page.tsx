import fakeData from "@/fakeData.json";
import getAllProducts from "@/lib/getAllProducts";
import { Params } from "@/type";
import ProductCard from "./components/ProductCard";

export default async function Page({ params }: Params) {
  const { category } = params;
  const decodedCategory = decodeURIComponent(category);

  // Define a flag to determine whether to use fake data or real data
  const useFakeData = false;

  let allProducts;
  if (useFakeData) {
    // Use fakeData to avoid API limit
    allProducts = fakeData;
  } else {
    allProducts = await getAllProducts(decodedCategory);
  }

  return (
    <>
      <h3 className="pb-5 font-light">
        Showing results for{" "}
        <span className="text-slate-500 font-semibold">
          "{decodedCategory}"
        </span>
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {allProducts.results[0]?.content?.results?.organic?.map(
          (product: any, i: number) => (
            <ProductCard key={i} product={product} />
          )
        )}
      </div>
    </>
  );
}

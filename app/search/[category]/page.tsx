import ImageSlider from "@/app/components/ImageSlider";
import { products } from "@/constants";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const decodedCategory = decodeURIComponent(category);

  // Fetch scrape data from API of OXYLABS using server actions
  const username = "worldapp";
  const password = "f#8X2m7Gr8!#kbB";
  const body = {
    source: "google_shopping_search",
    domain: "com",
    query: decodedCategory,
    pages: 1,
    parse: true,
    geo_location: "India",
    locale:"en-in",
  };
  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    },
    cache: "no-cache",
  });
  const data = await response.json();
  console.log(data.results);

  return (
    <>
      <h3 className="pb-5 font-light">Showing results for {decodedCategory}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
  {data.results[0].content?.results.organic?.map((product: any, i: number) => (
    <ProductCard key={i} product={product} />
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
        <h3 className="text-sm font-medium">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">
          {product.merchant.name}
        </p>
        <p className="text-sm text-gray-500">{product.price_str}</p>
      </div>
    </Link>
  );
};

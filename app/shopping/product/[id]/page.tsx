import ImageSlider from "@/app/components/ImageSlider";
import fakeProductData from "@/fakeProductData.json";
import { notFound } from "next/navigation";
import { IdParams } from "@/type";
import ProductDetails from "./components/ProductDetails";
import BuyNowButton from "./components/BuyNowButton";
import ProductSpecification from "./components/ProductSpecification";
import ProductReviews from "./components/ProductReviews";
import getProductDetails from "@/lib/getProductDetails";

export default async function Page({ params }: IdParams) {
  const { id } = params;

  // Define a flag to determine whether to use fake data or real data
  const useFakeData = true;

  let productData: any;
  if (useFakeData) {
    // Use fakeData to avoid API limit
    productData = fakeProductData.results[0]?.content;
  } else {
    const responseData = await getProductDetails(id);
    productData = responseData.results[0]?.content;
  }

  if (!productData.pricing) {
    notFound();
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1 lg:items-center">
        <ImageSlider urls={productData?.images?.full_size} />
        <div>
          <ProductDetails productData={productData} />
          <BuyNowButton productData={productData}/>
        </div>
      </div>

      <ProductSpecification productData={productData} />
      <ProductReviews productData={productData} />
    </>
  );
}

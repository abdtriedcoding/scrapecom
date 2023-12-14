import ImageSlider from "@/app/components/ImageSlider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import fakeProductData from "@/fakeProductData.json";
import { notFound } from "next/navigation";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  // Define a flag to determine whether to use fake data or real data
  const useFakeData = true;

  let productData: any;
  if (useFakeData) {
    // Use fakeData to avoid API limit
    await new Promise((resolve) => setTimeout(resolve, 2000));
    productData = fakeProductData.results[0]?.content;
  } else {
    const username = "worldapp";
    const password = "f#8X2m7Gr8!#kbB";
    const body = {
      source: "google_shopping_product",
      domain: "com",
      query: id,
      parse: true,
      geo_location: "India",
      locale: "en-in",
    };
    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
    });

    const responseData = await response.json();
    // Access the first item in the results array and then access the content field
    productData = responseData.results[0]?.content;
  }

  if (!productData.pricing) {
    notFound();
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1 lg:items-center">
        {/* Image gallery */}
        <ImageSlider urls={productData?.images?.full_size} />
        {/* Content */}
        <div>
          {/* Product details */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium max-w-sm">
              {productData?.title}
            </h1>
            {productData?.pricing?.online && (
              <p className="text-xl font-medium">
                {productData?.pricing?.online?.[0]?.price_total}{" "}
                {productData?.pricing?.online?.[0]?.currency}
              </p>
            )}
          </div>
          {/* Reviews */}
          <div className="mt-4">
            {productData?.reviews?.rating ? (
              <div className="flex items-center">
                <p>{productData?.reviews?.rating}</p>
                <div className="ml-1 flex items-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={cn(
                        productData?.reviews?.rating > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            ) : (
              <h4 className="italic">No Rating yet.</h4>
            )}
          </div>
          {/* Delivery */}
          {productData?.pricing?.online[0]?.details && (
            <p className="mt-5 text-sm">
              {productData?.pricing.online[0]?.details}
            </p>
          )}
          {/* Highlights */}
          {productData?.highlights && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {productData?.highlights?.map(
                    (highlight: any, index: number) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
          {/* Description */}
          {productData?.description && (
            <div className="py-10">
              <h2 className="text-sm font-medium">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {productData?.description}
                </p>
              </div>
            </div>
          )}
          {/* Buy Now Button */}
          <Button className="w-full flex bg-blue-500 hover:bg-blue-400">
            Buy Now
          </Button>
        </div>
      </div>

      {/* Product Specs Section */}
      {productData?.specifications && (
        <>
          <hr className="my-4 shadow-md" />
          <h3 className="font-semibold text-xl">Specifications</h3>

          <div className="flex space-x-5 flex-wrap mt-2">
            {productData?.specifications?.map((section: any) => (
              <div key={section.section_title} className="text-sm space-y-2">
                {section.items.map((item: any) => (
                  <div key={item.title} className="flex">
                    <p className="font-bold">{item.title}:</p>
                    <p className="ml-2">{item.value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Reviews */}
      <div className="mt-6">
        {productData?.reviews ? (
          <>
            <h2 className="font-medium text-xl pb-4">
              Reviews ({productData?.reviews.rating})
            </h2>

            <h4 className="text-lg italic">Top Review</h4>

            {productData?.reviews?.top_review && (
              <div className="mt-4 space-y-1">
                <p className="font-bold capitalize">
                  {productData?.reviews?.top_review?.author} says:
                </p>
                <p className="text-sm text-gray-600">
                  {productData?.reviews?.top_review?.text}
                </p>
              </div>
            )}
          </>
        ) : (
          <div>
            <h3 className="font-bold text-xl">Reviews</h3>
            <h4 className="text-lg italic">No Reviews yet.</h4>
          </div>
        )}
      </div>
    </>
  );
}

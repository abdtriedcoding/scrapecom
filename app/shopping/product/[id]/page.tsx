import ImageSlider from "@/app/components/ImageSlider";
import { Button } from "@/components/ui/button";
import { product2 } from "@/constants";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

export default function Example() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1 lg:items-center">
        {/* Image gallery */}
        <ImageSlider />
        {/* Content */}
        <div>
          {/* product2 details */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium text-gray-900">
              {product2.name}
            </h1>
            <p className="text-xl font-medium text-gray-900">
              {product2.price}
            </p>
          </div>
          {/* Reviews */}
          <div className="mt-4">
            <div className="flex items-center">
              <p className="text-sm text-gray-700">{product2.rating}</p>
              <div className="ml-1 flex items-center">
                {[0, 1, 2, 3, 4, 5].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={cn(
                      product2.rating > rating
                        ? "text-yellow-400"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                ·
              </div>
            </div>
          </div>
          {/* Highlists */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Hand cut and sewn locally
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Dyed with our proprietary colors
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Pre-washed &amp; pre-shrunk
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Ultra-soft 100% cotton</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Description */}
          <div className="py-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                The 6-Pack includes two black, two white, and two heather gray
                Basic Tees. Sign up for our subscription service and be the
                first to get new, exciting colors, like our upcoming
                &quot;Charcoal Gray&quot; limited release.
              </p>
            </div>
          </div>
          {/* Buy Now Button */}
          <Button className="w-full flex bg-blue-500 hover:bg-blue-400">
            Buy Now
          </Button>
        </div>
      </div>
      {/* Reviews */}
      <div className="mt-6">
        <h2 className="text-sm font-medium text-gray-900">Reviews</h2>

        <div className="mt-4 space-y-6">
          <p className="text-sm text-gray-600">
            The 6-Pack includes two black, two white, and two heather gray Basic
            Tees. Sign up for our subscription service and be the first to get
            new, exciting colors, like our upcoming &quot;Charcoal Gray&quot;
            limited release.
          </p>
        </div>
      </div>
    </>
  );
}

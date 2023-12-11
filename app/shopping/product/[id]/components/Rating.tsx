import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

const Rating = ({ productData }: { productData: any }) => {
  return (
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
  );
};

export default Rating;

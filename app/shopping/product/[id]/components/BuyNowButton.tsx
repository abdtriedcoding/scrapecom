import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const BuyNowButton = ({ productData }: { productData: any }) => {
  return (
    <Link
      href={`${productData?.url}`}
      target="_blank"
      className={buttonVariants({
        variant: "default",
        size: "full",
      })}
    >
      Buy Now
    </Link>
  );
};

export default BuyNowButton;

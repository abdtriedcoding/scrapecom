import Description from "./Description";
import Highlights from "./Highlights";
import Rating from "./Rating";

const ProductDetails = ({ productData }: { productData: any }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium max-w-xs md:max-w-sm">{productData?.title}</h1>
        {productData?.pricing?.online && (
          <p className="text-xl font-medium">
            {productData?.pricing?.online?.[0]?.price_total}{" "}
            {productData?.pricing?.online?.[0]?.currency}
          </p>
        )}
      </div>
      <Rating productData={productData} />
      {productData?.pricing?.online[0]?.details && (
        <p className="mt-5 text-sm">
          {productData?.pricing?.online[0]?.details}
        </p>
      )}
      <Highlights productData={productData} />
      <Description productData={productData} />
    </>
  );
};

export default ProductDetails;

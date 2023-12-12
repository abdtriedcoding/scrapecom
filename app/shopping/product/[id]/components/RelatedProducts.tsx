import RelatedProductCard from "./RelatedProductCard";

const RelatedProducts = ({ productData }: { productData: any }) => {
  return (
    <>
      {productData?.related_items && (
        <div className="pt-6 space-y-2">
          <h1 className="text-xl font-semibold">Related Products</h1>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {productData?.related_items[0]?.items?.map(
              (data: any, index: any) => (
                <RelatedProductCard key={index} {...data} />
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RelatedProducts;

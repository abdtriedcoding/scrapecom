const ProductReviews = ({ productData }: { productData: any }) => {
  return (
    <div className="mt-6">
      {productData?.reviews ? (
        <>
          <h2 className="font-medium text-xl pb-4">
            Reviews ({productData?.reviews?.rating})
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
  );
};

export default ProductReviews;

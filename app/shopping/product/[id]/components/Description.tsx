const Description = ({ productData }: { productData: any }) => {
  return (
    <>
      {productData?.description && (
        <div className="py-10">
          <h2 className="text-sm font-medium">Details</h2>
          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600">{productData?.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Description;

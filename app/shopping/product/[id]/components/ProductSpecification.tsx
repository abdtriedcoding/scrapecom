const ProductSpecification = ({ productData }: { productData: any }) => {
  return (
    <>
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
    </>
  );
};

export default ProductSpecification;

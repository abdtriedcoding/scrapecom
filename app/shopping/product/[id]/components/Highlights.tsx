const Highlights = ({ productData }: { productData: any }) => {
  return (
    <>
      {productData?.highlights && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
          <div className="mt-4">
            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
              {productData?.highlights?.map((highlight: any, index: number) => (
                <li key={index} className="text-gray-400">
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Highlights;

import ProductListsCategoriesGrid from "./ProductListsCategoriesGrid";

const Feed = () => {
  return (
    <>
      <div className="text-center">
      <h1 className="text-3xl font-medium mb-5">
        Welcome to Scrapecom Shopping Store
      </h1>
      <h2 className="mb-5">
        Get started by clicking one of the example or trying an item yourself
        above!
      </h2>
      </div>
      <ProductListsCategoriesGrid />
    </>
  );
};

export default Feed;

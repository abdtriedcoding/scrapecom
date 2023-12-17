const getAllProducts = async (decodedCategory: string) => {
  const username = process.env.NEXT_PUBLIC_USERNAME;
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  const body = {
    source: "google_shopping_search",
    domain: "com",
    query: decodedCategory,
    pages: 1,
    parse: true,
    geo_location: "India",
    locale: "en-in",
  };

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    },
    cache: "no-cache",
  });

  return response.json();
};

export default getAllProducts;

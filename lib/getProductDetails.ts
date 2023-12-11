const getProductDetails = async (id: string) => {
  const username = "worldapp";
  const password = "f#8X2m7Gr8!#kbB";
  const body = {
    source: "google_shopping_product",
    domain: "com",
    query: id,
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
  });

  return response.json();
};

export default getProductDetails;

export type Params = {
  params: { category: string };
};

export type IdParams = {
  params: { id: string };
};

export type RelatedProduct = {
  url: string;
  title?: string;
  rating: number;
  currency: string;
  price: number;
  store?: string
};

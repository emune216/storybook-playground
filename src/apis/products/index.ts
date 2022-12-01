import { Product } from "@app/types";

type ProductRequestType = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

const PRODUCT_LIMIT_COUNT = 20;

export const getProducts = async (page: number) => {
  const params = new URLSearchParams();
  params.set("limit", PRODUCT_LIMIT_COUNT + "");
  params.set("skip", (page * PRODUCT_LIMIT_COUNT).toString());

  const url = `https://dummyjson.com/products?${params.toString()}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data as Promise<ProductRequestType>;
  } catch (error) {
    throw new Error("getProducts Error!");
  }
};

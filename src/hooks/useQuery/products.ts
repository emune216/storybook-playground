import { useInfiniteQuery } from "react-query";

import { ProductInfinityPageType } from "@app/types/index";
import { PRODUCT_LIST_QUERY } from "@app/constants/query";
import { getProducts } from "@app/apis/products";

const getProductPage = async (page: number) => {
  const { limit, products, skip, total } = await getProducts(page);
  const hasNextPage = total > limit + skip;
  const nextPage = hasNextPage ? ++page : undefined;
  return {
    products,
    nextPage,
    hasNextPage,
  };
};

export const useProductListInfinityQuery = (
  initialData: ProductInfinityPageType
) =>
  useInfiniteQuery(
    [PRODUCT_LIST_QUERY],
    ({ pageParam }) => getProductPage(pageParam),
    {
      initialData: { pages: [initialData], pageParams: [0] },
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

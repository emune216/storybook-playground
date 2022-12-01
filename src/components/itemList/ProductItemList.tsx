import styled from "@emotion/styled";

import { Product } from "@app/types";
import ProductItem from "@app/components/item/ProductItem";

interface ProductItemListProps {
  products: (Product | undefined)[] | undefined;
}

const ProductItemList = ({ products }: ProductItemListProps) => {
  return (
    <Layout>
      {products?.map((item) => {
        if (!item) return null;
        return <ProductItem key={item.id} product={item} />;
      })}
    </Layout>
  );
};

export default ProductItemList;

const Layout = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 8px;
  column-gap: 8px;
`;

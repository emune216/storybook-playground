import styled from "@emotion/styled";

import { Product } from "@app/types";
import Item from "@app/components/item/Item";

interface ItemListProps {
  products: (Product | undefined)[] | undefined;
}

const ItemList = ({ products }: ItemListProps) => {
  return (
    <Layout>
      {products?.map((item) => {
        if (!item) return null;
        return (
          <Item
            key={item.id}
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
            price={item.price}
            brand={item.brand}
            rating={item.rating}
            stock={item.stock}
          />
        );
      })}
    </Layout>
  );
};

export default ItemList;

const Layout = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 8px;
  column-gap: 8px;
`;

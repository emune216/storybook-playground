import Image from "next/image";
import styled from "@emotion/styled";

import { Product } from "../../types";

interface ItemProps {
  product: Product;
}

const ProductItem = ({ product }: ItemProps) => {
  return (
    <Layout key={product.id}>
      <Image
        src={product.thumbnail}
        alt={product.title + " thumbnail"}
        width={100}
        height={100}
      />
      <span>{product.title}</span>
      <span>{product.description}</span>
      <span>{product.price}</span>
      <span>{product.brand}</span>
      <span>{product.rating}</span>
      <span>{product.stock}</span>
      <span>{product.discountPercentage}</span>
    </Layout>
  );
};

export default ProductItem;

const Layout = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7f7f7;
`;

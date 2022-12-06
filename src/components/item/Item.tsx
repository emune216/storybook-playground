import Image from "next/image";
import styled from "@emotion/styled";

export interface ItemProps {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  brand: string;
  rating: number;
  stock: number;
}

const Item = (args: ItemProps) => {
  return (
    <Layout>
      <Image
        src={args.thumbnail}
        alt={args.title + " thumbnail"}
        width={100}
        height={100}
      />
      <span>{args.title}</span>
      <span>{args.description}</span>
      <span>{args.price}</span>
      <span>{args.brand}</span>
      <span>{args.rating}</span>
      <span>{args.stock}</span>
    </Layout>
  );
};

export default Item;

const Layout = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7f7f7;
`;

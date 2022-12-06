import { useEffect } from "react";
import { NextPage } from "next";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

import ProductItemList from "@app/components/itemList/ItemList";
import { useProductListInfinityQuery } from "@app/hooks/useQuery/products";
import { getProducts } from "@app/apis/products";
import { Product } from "@app/types";

interface HomeProps {
  products: Product[];
  nextPage: number | undefined;
  hasNextPage: boolean;
}

const Home: NextPage<HomeProps> = ({ products, nextPage, hasNextPage }) => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useProductListInfinityQuery({
    products,
    nextPage,
    hasNextPage,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <S.Layout>
      <S.Heading>Hello, 안녕</S.Heading>
      <S.Section>
        <ProductItemList
          products={data?.pages.flatMap((data) => data?.products)}
        />
      </S.Section>
      <div ref={ref} />
    </S.Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { limit, products, skip, total } = await getProducts(0);
  const hasNextPage = total > limit + skip;
  const nextPage = hasNextPage ? 1 : undefined;

  return { props: { products, nextPage, hasNextPage } };
};

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

const Heading = styled.h1`
  font-weight: 900;
  padding: 16px;
  font-size: 24px;
`;

const S = {
  Layout,
  Section,
  Heading,
};

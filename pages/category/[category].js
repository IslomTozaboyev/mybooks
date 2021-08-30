import React from "react";
import { getBooks, getList } from "../../API";
import Books from "../../Containers/Books";
import Container from "../../Containers/container/container";

const Category = ({ listdata, booksdata }) => {
  return (
    <Container data={listdata}>
      <Books data={booksdata} />
    </Container>
  );
};

export const getServerSideProps = async (contex) => {
  const { category } = contex.query;
  const res = await getList();
  const res2 = await getBooks(category);
  return {
    props: {
      listdata: res.data || [],
      booksdata: res2.data || [],
    },
  };
};

export default Category;

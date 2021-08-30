import React from "react";
import { useSelector } from "react-redux";
import { getBooks, getList } from "../../API";
import Books from "../../Containers/Books";
import Container from "../../Containers/container/container";
import { dispatch } from "../../redux/Store";
import * as t from "../../redux/Types";
const Category = ({ listdata, booksdata }) => {
  const datas = () => {
    const action = { type: t.BOOKS_DATA3, payload: booksdata };
    dispatch(action);
  };
  datas();
  const array = useSelector((state) => state.BooksReducer.data);
  return (
    <Container data={listdata}>
      <Books data={array} />
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

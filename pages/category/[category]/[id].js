import router, { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { getBooks, getList } from "../../../API";
import Container from "../../../Containers/container/container";
import { dispatch } from "../../../redux/Store";
import * as t from "../../../redux/Types";
const Id = ({ dataList, dataBooks }) => {
  const datas = () => {
    const action = { type: t.BOOKS_DATA, payload: dataBooks };
    dispatch(action);
  };
  datas();
  const id = useRouter().query.id;
  const datas2 = useSelector((state) => state.BooksReducer.data);
  const data = datas2?.results?.books.filter((v) => v.book_uri.slice(11))[0];
  console.log(datas2);
  console.log(data);
  return (
    <Container data={dataList}>
      <img src={data.book_image} alt="" />
    </Container>
  );
};

export const getServerSideProps = async () => {
  const res = await getList();
  const res2 = await getBooks();

  return {
    props: {
      dataList: res.data || [],
      dataBooks: res2.data || [],
    },
  };
};

export default Id;

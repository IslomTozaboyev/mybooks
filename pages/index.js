import { getBooks, getList } from "../API";
import Books from "../Containers/Books";
import Container from "../Containers/container/container";
import { GlobalStyles } from "../styles/GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import { dispatch } from "../redux/Store";
import * as t from "../redux/Types";

export default function Home({ listdata, booksdata }) {
  const datas = () => {
    const action = { type: t.BOOKS_DATA, payload: booksdata };
    dispatch(action);
  };
  datas();
  return (
    <div>
      <Container data={listdata}>
        <Books data={booksdata}></Books>
      </Container>
      <GlobalStyles />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await getList();
  const res2 = await getBooks();
  return {
    props: {
      listdata: res.data || [],
      booksdata: res2.data || [],
    },
  };
};

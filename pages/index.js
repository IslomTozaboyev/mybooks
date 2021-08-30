import { getBooks, getList } from "../API";
import Books from "../Containers/Books";
import Container from "../Containers/container/container";
import { GlobalStyles } from "../styles/GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home({ listdata, booksdata }) {
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

import styled from "styled-components";

const BooksWrapper = styled.div`
  overflow: hidden;

  .books_img {
    min-width: 250px !important;
    height: 250px;
    object-fit: cover;
  }
  .input {
    padding: 5px 0;
    border: 1px solid grey;
    outline: none;
    box-shadow: none;
  }
  .cursor {
    cursor: pointer;
  }
`;
export default BooksWrapper;

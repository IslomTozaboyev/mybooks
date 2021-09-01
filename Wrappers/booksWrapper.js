import styled from "styled-components";

const BooksWrapper = styled.div`
  overflow: hidden;
  margin-top: 70px;
  .books_img {
    min-width: 250px !important;
    height: 250px;
    object-fit: cover;
    cursor: pointer;
  }
  .input {
    padding: 5px 0;
    outline: none;
    box-shadow: none;
  }
  .cursor {
    cursor: pointer;
  }
  .titles {
    color: ${({ theme }) => theme.link};
    font-weight: 600;
    font-size: 16px;
  }
  .box {
    box-shadow: 0 0 5px ${({ theme }) => theme.shadow};
  }
`;
export default BooksWrapper;

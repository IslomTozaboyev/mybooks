import styled from "styled-components";

const HeaderWrapper = styled.div`
  .header {
    box-shadow: 0 0 5px ${({ theme }) => theme.shadow};
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.body};
    z-index: 1000;
    .logo {
      height: 40px;
    }
    ul {
      li {
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;
export default HeaderWrapper;

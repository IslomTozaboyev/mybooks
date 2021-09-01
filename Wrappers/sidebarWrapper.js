import styled from "styled-components";

const SidebarWrapper = styled.div`
  display: flex;
  min-width: 310px;
  margin-top: 70px;

  .sidebar {
    position: sticky;
    top: 0;
    overflow-y: auto;
    height: 100vh;

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #ccc;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .input {
      border: 1px solid #ccc;
      outline: none;
      padding: 6px 0;
    }
  }
  .active {
    background-color: #000;
    color: #fff;
  }
  .sidebar_link {
    padding: 10px 0;
    color: ${({ theme }) => theme.link} !important;
    font-size: 14px;
    font-weight: 600;
    &:hover {
      color: #000 !important;
    }
  }
  .popular {
    padding-left: 30px !important;
  }
`;
export default SidebarWrapper;

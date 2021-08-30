import styled from "styled-components";

const SidebarWrapper = styled.div`
  display: flex;
  min-width: 310px;

  .sidebar {
    position: sticky;
    top: 0;
    overflow-y: auto;
    height: 100vh;
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
    color: #2c3134;
    font-weight: 600;
  }
`;
export default SidebarWrapper;

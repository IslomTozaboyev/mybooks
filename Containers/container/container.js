import React from "react";
import ContainerWrapper from "../../Wrappers/containerWrapper";
import Sidebar from "../Sidebar/sidebar";

const Container = ({ children, data }) => {
  return (
    <div>
      <ContainerWrapper>
        <Sidebar data={data} />
        <div className="w-100"> {children}</div>
      </ContainerWrapper>
    </div>
  );
};

export default Container;

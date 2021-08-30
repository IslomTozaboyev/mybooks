import { faMoon, faSave, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import HeaderWrapper from "../../Wrappers/headerWrapper";

const Header = ({ toggle, theme }) => {
  return (
    <HeaderWrapper>
      <header className="header">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img
                className="logo w-100 text-dark"
                src="algorismic.svg"
                alt="rasm"
              />
            </div>
            <div>
              <ul className="d-flex py-4 m-0">
                <li className="px-3">Book store</li>
                <li className="px-3">Wishlist</li>
                <li className="px-3">My collection</li>
              </ul>
            </div>
            <div className="d-flex align-items-center">
              <Button className="text-white" onClick={toggle}>
                <FontAwesomeIcon icon={theme == "light" ? faSun : faMoon} />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
};

export default Header;

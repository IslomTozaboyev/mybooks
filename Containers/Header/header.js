import { faMoon, faSave, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import HeaderWrapper from "../../Wrappers/headerWrapper";
import * as t from "../../redux/Types";
import { dispatch } from "../../redux/Store";

const Header = ({ toggle, theme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const arrays = useSelector((state) => state.BooksReducer.data);
  const array = arrays?.results?.books?.filter((value) =>
    value.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  const datas = () => {
    const action = { type: t.BOOKS_DATA2, payload: array };
    dispatch(action);
  };
  useEffect(() => {
    datas();
  }, [searchTerm]);
  datas();
  return (
    <HeaderWrapper>
      <header className="header w-100">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img
                className="logo w-100 text-dark"
                src="algorismic.svg"
                alt="rasm"
              />
            </div>
            <input
              className="input px-2"
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
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

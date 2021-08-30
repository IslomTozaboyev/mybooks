import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import BooksWrapper from "../../Wrappers/booksWrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Books = () => {
  const router = useRouter().asPath;
  const array = useSelector((state) => state.BooksReducer.filterData);
  console.log(array);
  return (
    <BooksWrapper>
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="fw-bold">For you</h3>
          </div>
          <div className="d-flex align-items-center mb-5">
            <Link href="/">
              <a>
                <FontAwesomeIcon className="me-3" icon={faHeart} />
              </a>
            </Link>
          </div>
        </div>

        <div className="row w-100">
          {array?.map((value, index) => {
            return (
              <div
                className="col-lg-6 col-xl-4 col-xxl-3 mb-4 _card"
                key={index}
              >
                <Link href={router + value.book_uri.slice(10)}>
                  <a>
                    <div className="rounded shadow">
                      <img
                        className="w-100 books_img"
                        src={value.book_image}
                        alt="rasm"
                      />
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-bold py-3 text-center mb-0 px-3 py-2">
                          {value.title}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </BooksWrapper>
  );
};

export default Books;

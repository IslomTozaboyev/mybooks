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
        <div>
          <h3 className="fw-bold mb-3 ">For you</h3>
        </div>
        <div className="row w-100">
          {array?.map((value, index) => {
            return (
              <div
                className="col-lg-6 col-xl-6 col-xxl-6 mb-5 _card"
                key={index}
              >
                <Link href={router + value.book_uri.slice(10)}>
                  <a>
                    <div className="d-flex rounded box">
                      <div>
                        <img
                          className="w-100 books_img rounded"
                          src={value.book_image}
                          alt="rasm"
                        />
                      </div>
                      <div className="text-center titles">
                        <p className="fw-bold py-3 mb-0 px-3 py-2">
                          {value.title}
                        </p>
                        <p>{value.author}</p>
                        <p>{value.description}</p>
                        <p>{value.publisher}</p>
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

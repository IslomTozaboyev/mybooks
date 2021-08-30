import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import BooksWrapper from "../../Wrappers/booksWrapper";
import Link from "next/link";

const Books = ({ data }) => {
  const [a, setA] = useState(false);
  const [datas, setDatas] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const info = (book_uri) => {
    setA(!a);
    setDatas(data.results.books.filter((v) => v.book_uri === book_uri)[0]);
    console.log(datas);
  };

  const backBook = () => {
    setA(!a);
  };
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
            <input
              className="input px-2"
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        {a ? (
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div>
                <div className="p-1">
                  <img
                    style={{
                      objectFit: "cover",
                      height: "400px",
                      width: "400px",
                    }}
                    src={datas.book_image}
                    alt="rasm"
                    className="photo"
                  />
                </div>
                <p>{datas.title}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="fs-5 fw-bold">{datas.title}</p>
              <p className="fw-bolder">{datas.publisher}</p>
              <p className="fw-normal">{datas.description}</p>
              <p className="fw-normal">{datas.contributor}</p>
              <p className="fw-normal">{datas.author}</p>
              <p className="fw-normal">{datas.rank_last_week}</p>
            </div>
            <Button color="primary" onClick={backBook}>
              Back
            </Button>
          </div>
        ) : (
          <div className="row w-100">
            {data.results.books
              .filter((value) => {
                if (searchTerm == "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((value, index) => {
                return (
                  <div
                    className="col-lg-6 col-xxl-3 mb-4 responsive_card"
                    key={index}
                  >
                    <div onClick={() => info(value.book_uri)}>
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
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </BooksWrapper>
  );
};

export default Books;

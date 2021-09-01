import React, { useState } from "react";
import SidebarWrapper from "../../Wrappers/sidebarWrapper";
import Link from "next/link";

const Sidebar = ({ data }) => {
  console.log(data);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SidebarWrapper>
      <div className="container py-3 sidebar">
        <div className="menu">
          <input
            className="px-2 mb-3 ms-4 input"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            placeholder="search..."
          />
          <h5 className="fw-bold px-4 popular">Popular subjects</h5>
          <ul>
            {data.results
              .filter((value) => {
                if (searchTerm == "") {
                  return value;
                } else if (
                  value.list_name_encoded
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              ?.map((value, index) => {
                return (
                  <li className="p-0" key={index}>
                    <Link href={"/category/" + value.list_name_encoded}>
                      <a className={`sidebar_link px-0`}>
                        {value.list_name_encoded}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;

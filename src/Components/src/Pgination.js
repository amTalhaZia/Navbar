import React from "react";
import jsonData from "./MOCK_DATA.json";
import { useState } from "react";
import "./App.css";
import ReactPaginate from "react-paginate";

const Pgination = () => {
  const [users, setusers] = useState(jsonData.slice(0, 51));
  const [pageNumber, setpageNumber] = useState(0);

  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage;
  const displayUsers = users
    .slice(pageVisited, pageVisited + userPerPage)
    .map((user) => {
      return (
        <div className="user">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

    const pageCount = Math.ceil(users.length/userPerPage)
    const  pageChange = ({selected}) =>{
       setpageNumber(selected)
    }

  return <div className="App">{displayUsers}
   <ReactPaginate
   previousLabel = {"previous"}
   nextLabel = {"next"}
   pageCount={pageCount}
   onPageChange={pageChange}
   containerClassName={"paginationBttns"}
   previousLinkClassName={"previousBttn"}
   nextLinkClassName={"nextBttn"}
   disabledClassName={"paginationDisabled"}
   activeClassName={"paginationActive"}
   />
  </div>;
};

export default Pgination;

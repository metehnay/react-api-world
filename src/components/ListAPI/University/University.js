import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./University.css";
import InfiniteScroll from "react-infinite-scroll-component";

const University = ({ isAuth, setIsAuth }) => {
  const [college, setCollege] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("Turkey");

  const getCollege = async () => {
    const res = await fetch(
      `http://universities.hipolabs.com/search?country=${searchTerm}`
    );
    const data = await res.json();
    const log = console.log(data);
    setCollege(data);
  };

  useEffect(() => {
    getCollege();
  }, []);

  return (
    <>
      <div className="containers">
        <p className="p-2 mt-2 btn btn-primary d-flex justify-content-center api">
          <a
            href="https://github.com/Hipo/university-domains-list"
            target="_blank"
          >
            {" "}
            CLICK TO VISIT API SOURCE
          </a>
        </p>
        <div className="sidebar">
          <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />

          <div className="norris mt-4">
            <div className="former">
              <div className="form-control">
                <input
                  type="text"
                  className="border-0"
                  placeholder="Search Country.."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={getCollege} className="mt-4 btn btn-primary">
                  SEARCH
                </button>
              </div>
              <div className="college-container">
                {college.map((col) => (
                  <>
                    <div className="college">
                      <h2>University: {col.name}</h2>
                      <h4>Domain: {col.domains}</h4>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default University;

import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./RandomUser.css";

const ChuckNorris = ({ isAuth, setIsAuth }) => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAPI = () => {
      fetch("https://randomuser.me/api/?results=50")
        .then((resp) => resp.json())
        .then((data) => (setLoading(true), setUserList(data.results)));
    };

    getAPI();
  }, []);

  return (
    <>
      <div className="containers">
        <p className="p-2 mt-2 btn btn-primary d-flex justify-content-center api">
          <a href="https://randomuser.me/" target="_blank">
            {" "}
            CLICK TO VISIT API SOURCE
          </a>
        </p>
        <div className="sidebar">
          <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
          <div className="norris mt-4">
            <div className="grid-container">
              {loading ? (
                <>
                  {userList.map((users) => (
                    <>
                      <div className="grid-item">
                        <h2>{users.name.first}</h2>
                        <img src={users.picture.large} alt="github" />
                      </div>
                    </>
                  ))}
                </>
              ) : (
                <>
                  <div className="con d-flex justify-content-center align-items-center mt-5 pt-5">
                    <div
                      class="spinner-border text-primary d-flex mt-5"
                      style={{ width: 244, height: 244 }}
                      role="status"
                    >
                      <span class="sr-only"></span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChuckNorris;

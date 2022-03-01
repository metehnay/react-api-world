import React, { useEffect, useState } from "react";
import Loading from "../../Loading";
import Sidebar from "../../Sidebar/Sidebar";
import "./MakeUp.css";

const MakeUp = ({ isAuth, setIsAuth }) => {
  const [loading, setLoading] = useState(false);
  const [makeup, setMakeup] = useState([]);

  const getMakeup = () => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
      .then((resp) => resp.json())
      .then((dat) => (setLoading(true), setMakeup(dat), console.log(dat)));
  };

  useEffect(() => {
    getMakeup();
  }, []);

  return (
    <>
      <div className="containers">
        <p className="p-2 mt-2 btn btn-primary d-flex justify-content-center api">
          <a href="http://makeup-api.herokuapp.com/" target="_blank">
            {" "}
            CLICK TO VISIT API SOURCE
          </a>
        </p>
        <div className="sidebar">
          <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
          <div className="norris mt-4">
            <div className="makeup-container">
              {loading ? (
                <>
                  {makeup
                    .slice(Math.max(makeup.length - 55, 0))
                    .map((makeups) => (
                      <>
                        <div className="makeup">
                          <h5>{makeups.name}</h5>
                          <img src={makeups.image_link} />
                          <h6>Brand: {makeups.brand}</h6>
                          <p>${makeups.price}</p>
                        </div>
                      </>
                    ))}
                </>
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeUp;

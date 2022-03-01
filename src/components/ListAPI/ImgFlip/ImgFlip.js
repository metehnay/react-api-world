import React, { useEffect, useState } from "react";
import Loading from "../../Loading";
import Sidebar from "../../Sidebar/Sidebar";
import "./Flip.css";

const ImgFlip = ({ isAuth, setIsAuth }) => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((resp) => resp.json())
      .then((data) => (setLoading(true), setMemes(data.data.memes)));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="containers">
        <p className="p-2 mt-2 btn btn-primary d-flex justify-content-center api">
          <a href="https://imgflip.com/api" target="_blank">
            {" "}
            CLICK TO VISIT API SOURCE
          </a>
        </p>
        <div className="sidebar">
          <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
          <div className="norris mt-4">
            <div className="former">
              <h2>DOWNLOAD MEME TEMPLATES</h2>
              <div className="meme-container">
                {loading ? (
                  <>
                    {" "}
                    {memes.map((meme) => (
                      <>
                        <div className="meme">
                          <h4>{meme.name}</h4>
                          <img src={meme.url} />
                        </div>
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    <Loading />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgFlip;

import React, { useEffect, useState } from "react";
import Loading from "../../Loading";
import Sidebar from "../../Sidebar/Sidebar";
import "./Football.css";

const Football = ({ isAuth, setIsAuth }) => {
  const [match, setMatch] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFootball = () => {
    fetch(
      "https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01&federation=UEFA",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "football-prediction-api.p.rapidapi.com",
          "x-rapidapi-key":
            "24689ec804msh1367692dc31b2c4p1b5e23jsn1688fd4050d2",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => (setLoading(true), setMatch(data.data)))
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getFootball();
  }, []);

  return (
    <>
      <div className="containers">
        <p className="p-2 mt-2 btn btn-primary d-flex justify-content-center api">
          <a
            href="https://rapidapi.com/boggio-analytics/api/football-prediction/"
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
              <div className="match-container">
                {loading ? (
                  <>
                    {match.map((matc) => (
                      <>
                        <div className="match">
                          <p>League: {matc.competition_name}</p>
                          <h6>{matc.home_team}</h6>
                          <p>VS</p>
                          <h6>{matc.away_team}</h6>
                          <p>{matc.result}</p>
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
      </div>
    </>
  );
};

export default Football;

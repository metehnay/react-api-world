import React, { useEffect, useState } from "react";
import Loading from "../../Loading";
import Sidebar from "../../Sidebar/Sidebar";
import "./Crypto.css";

const Crypto = ({ isAuth, setIsAuth }) => {
  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCrypto = () => {
    fetch("https://api2.binance.com/api/v3/ticker/24hr")
      .then((resp) => resp.json())
      .then((dat) => (setLoading(true), setCrypto(dat)));
  };

  useEffect(() => {
    getCrypto();
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
            <div className="crypto">
              {loading ? (
                <>
                  {" "}
                  {crypto.slice(Math.max(crypto.length - 55, 0)).map((coin) => (
                    <>
                      <div className="coin">
                        <div className="coin-inside">
                          <h5>Coin: {coin.symbol}</h5>
                          <p>Price: {coin.lastPrice}$</p>
                          <p>24H Low: {coin.lowPrice}$</p>
                        </div>
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

export default Crypto;

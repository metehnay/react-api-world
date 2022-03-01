import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Valorant.css";

const Valorant = ({ isAuth, setIsAuth }) => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAgents = fetch("https://valorant-api.com/v1/agents")
      .then((res) => res.json())
      .then((data) => (setAgents(data.data), setLoading(true)));
  }, []);
  return (
    <>
      <div className="containers">
        <p className="p-2 mt-2 btn btn-primary d-flex justify-content-center api">
          <a href="https://dash.valorant-api.com/" target="_blank">
            {" "}
            CLICK TO VISIT API SOURCE
          </a>
        </p>
        <div className="sidebar">
          <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
          <div className="norris mt-4">
            <div className="valo-container">
              {loading ? (
                <>
                  {agents.map((agent) => (
                    <>
                      <div className="valo-item">
                        <img src={agent.displayIcon} />
                        <h4>{agent.displayName}</h4>
                        <p>{agent.description}</p>
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

export default Valorant;

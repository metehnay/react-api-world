import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { signOut } from "firebase/auth";
import lock from "./lock.svg";
import background from "./background.png";
import styles from "./Group1.module.scss";
import { auth, useAuth, upload } from "../../firebase";
import styled from "styled-components";

import ChuckNorris from "../ListAPI/ChuckNorris/ChuckNorris";

const Sidebar = ({ isAuth, setIsAuth }) => {
  const currentUser = useAuth();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };
  return (
    <>
      <div className="side">
        <div className="login">
          {!isAuth ? (
            <Link to="/login" className="middle">
              Log In
            </Link>
          ) : (
            <>
              {currentUser?.photoURL ? (
                <img src={currentUser?.photoURL} className="avatar" />
              ) : (
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  }
                  className="avatar"
                />
              )}
              <h6 id="log">
                {currentUser?.displayName ? (
                  <>{currentUser?.displayName}</>
                ) : (
                  <p>Anonymous</p>
                )}
              </h6>
            </>
          )}
        </div>

        {isAuth && (
          <UnsplashmfBBssMcRoot>
            <Image1
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/74f094d9-5382-41b9-84e6-6b8c7b6c80c9.svg?alt=media&token=fd8ae73d-b74d-4d42-9542-6b374e671bd1"
              }
            />
            <Text1>API World</Text1>
            <BlackFlexRow>
              <Ellipse2
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/d5655ddf-f279-4adb-9c37-da4d424f0fad.svg?alt=media&token=58590b20-0bac-4af8-aa57-15a69ae04689"
                }
              />
              <FlexRow>
                <Ellipse
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/36062e7a-260f-4f3e-bbf2-5cc36062ca7e.svg?alt=media&token=9b6829e1-ec2d-4d66-bf6e-6c53ec38ce89"
                  }
                />
                <Text2 id="logged-user">
                  {" "}
                  <Link to="/createpost">Add API</Link>
                </Text2>
              </FlexRow>
              <Ellipse1
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/e349aaa6-cddd-4f50-acbc-9583e2d47bd2.svg?alt=media&token=a78e3a1b-f6b6-42ac-87cd-dbfc712a1bcc"
                }
              />
              <FlexRow1>
                <Ellipse
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/97ff3037-d7de-4b00-8f97-be061c9c3927.svg?alt=media&token=f7e96c2f-6b88-452b-bd45-19cce476984b"
                  }
                />
                <Text3 id="logged-user">
                  <Link to="/favorites">Favorites</Link>
                </Text3>
              </FlexRow1>
            </BlackFlexRow>
            <Text4 onClick={signUserOut} id="logged-user">
              Log out
            </Text4>
            <Text5 id="logged-user">
              {" "}
              <Link to="/">Homepage</Link>
            </Text5>
          </UnsplashmfBBssMcRoot>
        )}
        {!isAuth && (
          <>
            <div className="exe mt-4">
              <img src={background} className="homepage" />
              <div className="explore">
                <h3>
                  <Link to="/">API World</Link>
                </h3>
                <p className="free">Free API Platform</p>
              </div>
            </div>
          </>
        )}

        {isAuth ? (
          <h3 className="m-4">API LIST</h3>
        ) : (
          <p className="m-3">You must be signed in to see API list.</p>
        )}
        <div className={isAuth ? "category" : "blur"}>
          <div className="categories m-2 p-4">
            <li>
              <Link to="/googlebooks" className="kat">
                Google Books API
              </Link>
            </li>
            <li>
              <Link to="/crypto" className="kat">
                Binance Crypto API
              </Link>
            </li>
            <li>
              <Link to="/randomuser" className="kat">
                Random User API
              </Link>
            </li>
            <li>
              <Link to="/cocktails" className="kat">
                Cocktails API
              </Link>
            </li>
            <li>
              <Link to="/pokemon" className="kat">
                Pokemon API
              </Link>
            </li>
            <li>
              <Link to="/catfacts" className="kat">
                Cat Facts API
              </Link>
            </li>
            <li>
              <Link to="/valorant" className="kat">
                Valorant API
              </Link>
            </li>
            <li>
              <Link to="/makeup" className="kat">
                Makeup API
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="kat">
                Recipes API
              </Link>
            </li>
            <li>
              <Link to="/imgflip" className="kat">
                Meme Templates API
              </Link>
            </li>
            <li>
              <Link to="/football" className="kat">
                Football API
              </Link>
            </li>
            <li>
              <Link to="/chucknorris" className="kat">
                Chuck Norris API
              </Link>
            </li>
            {!isAuth && <img src={lock} id="lock" />}
          </div>
        </div>
      </div>
      <div className="norris"></div>
    </>
  );
};

export default Sidebar;
const Ellipse = styled.img`
  width: 14.91px;
  height: 15.57px;
`;
const UnsplashmfBBssMcRoot = styled.div`
  width: 256px;
  height: 316px;
  position: relative;
  margin: auto;
  padding: 10px 0px;
  border-radius: 14px;
`;
const Image1 = styled.img`
  width: 256px;
  height: 316px;
  position: absolute;
`;
const Text1 = styled.div`
  color: #f8f8f8;
  width: 218px;
  height: 44.7px;
  font-size: 35px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 21.65px;
  left: 18.06px;
`;
const BlackFlexRow = styled.div`
  background-color: rgba(38, 38, 38, 0.92);
  border-width: 1px;
  border-color: rgba(209, 32, 224, 0.82);
  border-style: solid;
  backdrop-filter: blur(15px);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 186.66px;
  position: absolute;
  top: 80.7px;
  left: 17.87px;
  width: 155px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 16.17px;
  padding-bottom: 16.17px;
  padding-left: 12.13px;
  padding-right: 5.81px;
  align-items: flex-start;
  border-radius: 14px;
`;
const Ellipse2 = styled.img`
  width: 15px;
  height: 15.57px;
  margin-bottom: 23.3px;
`;
const FlexRow = styled.div`
  align-self: stretch;
  height: 18.9px;
  margin-bottom: 19.99px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8.76px;
  align-items: flex-start;
`;
const Text2 = styled.div`
  color: rgba(255, 255, 255, 0.87);
  width: 89.3px;
  height: 18.9px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  align-self: stretch;
`;
const Ellipse1 = styled.img`
  width: 14.91px;
  height: 15.57px;
  margin-bottom: 23.29px;
`;
const FlexRow1 = styled.div`
  align-self: stretch;
  height: 25.9px;
  display: flex;
  flex-direction: row;
  gap: 8.76px;
  align-items: flex-start;
`;
const Text3 = styled.div`
  color: rgba(255, 255, 255, 0.87);
  width: 94.4px;
  height: 25.9px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  align-self: stretch;
`;
const Text4 = styled.div`
  color: rgba(255, 255, 255, 0.87);
  width: 102px;
  height: 24.8px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 184.74px;
  left: 54.66px;
`;
const Text5 = styled.div`
  color: rgba(255, 255, 255, 0.87);
  width: 102px;
  height: 24.8px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 106.95px;
  left: 55.65px;
`;

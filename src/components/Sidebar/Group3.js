import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Sidebar.css";
export const Group3 = ({}) => {
  return (
    <GroupRoot className="group">
      <Q>
        <Element1>
          <Tage
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/d0d6167e-d308-4f9a-bcf3-c213a044bb31.svg?alt=media&token=04952be7-095f-4f8a-a6a1-1197e3322a96"
            }
          />
          <Image1
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/aa8e786d-2d2a-4f52-8ba3-cc7c5df6aad3.svg?alt=media&token=8e44585a-db82-4caa-89e9-0cb2d3618366"
            }
          />
          <Text1>
            <Link to="/cocktails">Cocktails</Link>
          </Text1>
        </Element1>

        <Element1>
          <Wqeqw />
          <Image1
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/11efbbac-c109-4e4a-8189-8435611c517e.svg?alt=media&token=407c4208-cca4-4d0b-a4ef-348022f651f4"
            }
          />
          <Text2>
            <Link to="/crypto">Binance</Link>
          </Text2>
        </Element1>

        <Element1>
          <Wqeqw />
          <Image1
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/11efbbac-c109-4e4a-8189-8435611c517e.svg?alt=media&token=407c4208-cca4-4d0b-a4ef-348022f651f4"
            }
          />
          <Text2>
            {" "}
            <Link to="/makeup">Makeup</Link>
          </Text2>
        </Element1>
        <Element1>
          <Wqeqw />
          <Image1
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/11efbbac-c109-4e4a-8189-8435611c517e.svg?alt=media&token=407c4208-cca4-4d0b-a4ef-348022f651f4"
            }
          />
          <Text2>
            <Link to="/googlebooks">Google Books</Link>
          </Text2>
        </Element1>
      </Q>
      <Asa
        src={
          "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/250fd789-eaad-4cbe-80a3-82efc50043c1.svg?alt=media&token=7cd93aec-4a9f-4794-9411-700d06b54f8b"
        }
      />
    </GroupRoot>
  );
};
const Element1 = styled.div`
  height: 46px;
  width: 220px;
  margin-top: 0px;
  position: relative;
`;
const Image1 = styled.img`
  width: 62.88px;
  height: 46px;
  position: absolute;
  left: 8.95px;
`;
const GroupRoot = styled.div`
  width: 256px;
  height: 503px;
  position: relative;
  margin: auto;
`;
const Q = styled.div`
  background-color: #479fd7;
  height: 100%;
  position: absolute;
  top: 1px;
  left: 1.8px;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  gap: 13px;
  padding-top: 95px;

  padding-bottom: 95px;
  padding-left: 16.2px;
  padding-right: 17.8px;
  border-radius: 14px;
`;
const Tage = styled.img`
  width: 220px;
  height: 42px;
  position: absolute;
  top: 3px;
`;
const Text1 = styled.div`
  font-size: 21px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 10px;
  left: 56px;
`;
const Wqeqw = styled.div`
  background-color: #ffffff;
  width: 220px;
  height: 42px;
  position: absolute;

  top: 4px;
  border-radius: 50px;
`;
const Text2 = styled.div`
  font-size: 21px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 10px;

  left: 55.78px;
`;
const Asa = styled.img`
  width: 256px;
  height: 54px;

  position: absolute;
`;

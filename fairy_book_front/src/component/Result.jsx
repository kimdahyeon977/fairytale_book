import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { nameAtom } from "../App";
import { TextField } from "@mui/material";

export default function Result() {
  const [name, setName] = useRecoilState(nameAtom);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="common-page">
      <div style={{ display: "flex" }}>
        <div>
          <div>날짜</div>
          <div style={{ display: "flex" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              sx={{ backgroundColor: "white" }}
            />
            년{" "}
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              sx={{ backgroundColor: "white" }}
            />
            월{" "}
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={day}
              onChange={(e) => {
                setDay(e.target.value);
              }}
              sx={{ backgroundColor: "white" }}
            />
            일{" "}
          </div>
          <div>날씨</div>
          <div className="box">
            <div className="element-weather">
              <div className="element-title">
                <div className="group">
                  <div className="title">
                    <div className="text-wrapper">날씨</div>
                  </div>
                </div>
              </div>
              <div className="icon">
                <div className="div-wrapper">
                  <div className="div">맑음</div>
                </div>
                <div className="icon-2" />
              </div>
              <div className="icon-3">
                <div className="div-wrapper">
                  <div className="div">구름</div>
                </div>
                <div className="icon-cloudy-wrapper">
                  <img
                    className="icon-cloudy"
                    alt="Icon cloudy"
                    src="https://generation-sessions.s3.amazonaws.com/60a1d66f547a6d9cbfc00449c8f2687e/img/icon-02-cloudy.png"
                  />
                </div>
              </div>
              <div className="icon-4">
                <div className="title-2">
                  <div className="div">비</div>
                </div>
                <div className="img-wrapper">
                  <img
                    className="img"
                    alt="Icon rain"
                    src="https://generation-sessions.s3.amazonaws.com/60a1d66f547a6d9cbfc00449c8f2687e/img/icon-03-rain.png"
                  />
                </div>
              </div>
              <div className="icon-5">
                <div className="title-3">
                  <div className="div">눈</div>
                </div>
                <div className="img-wrapper">
                  <img
                    className="img"
                    alt="Icon snow"
                    src="https://generation-sessions.s3.amazonaws.com/60a1d66f547a6d9cbfc00449c8f2687e/img/icon-04-snow.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div>스토리</div>
        <TextField
          id="outlined-multiline-flexible"
          multiline
          maxRows={20}
          sx={{ width: "50vw", backgroundColor: "white" }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

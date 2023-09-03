import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { nameAtom, serverData } from "../App";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const [data, setName] = useRecoilState(serverData);
  const [datajson, setDatajson] = useRecoilState(serverData);
  const navigate = useNavigate();

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = React.useState(false);
  const [pageIdx, setPageIdx] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log(1, datajson);
    Object.keys(datajson).length && setText(datajson?.sentences[pageIdx]);
  }, [datajson]);
  return (
    <div className="common-page">
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ display: "flex", width: "30vw", alignItems: "center" }}>
          <div>
            <div className="middle-font-small" style={{ textAlign: "left" }}>
              날짜
            </div>
            <div style={{ display: "flex" }}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  maxWidth: "60px",
                  height: "40px",
                  padding: "2px",
                  "& .MuiOutlinedInput-input": {
                    padding: "0px 2px", // 패딩을 0으로 설정
                    fontSize: "1.5rem", // 글씨 크기를 1.5rem으로 설정
                    color: "#404040",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                      borderWidth: 0, // 이 부분이 태두리 라인을 없애는 코드입니다.
                      padding: "0px",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // 마우스를 올렸을 때 태두리 없앰
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // 포커스 상태일 때 태두리 없앰
                    },
                  },
                }}
              />
              <div className="middle-font-small">년 </div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  maxWidth: "40px",
                  height: "40px",
                  padding: "2px",
                  "& .MuiOutlinedInput-input": {
                    padding: "0px 2px", // 패딩을 0으로 설정
                    fontSize: "1.5rem", // 글씨 크기를 1.5rem으로 설정
                    color: "#404040",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                      borderWidth: 0, // 이 부분이 태두리 라인을 없애는 코드입니다.
                      padding: "0px",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // 마우스를 올렸을 때 태두리 없앰
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // 포커스 상태일 때 태두리 없앰
                    },
                  },
                }}
              />
              <div className="middle-font-small">월 </div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={day}
                onChange={(e) => {
                  setDay(e.target.value);
                }}
                sx={{
                  backgroundColor: "white",
                  maxWidth: "40px",
                  height: "40px",
                  padding: "2px",
                  "& .MuiOutlinedInput-input": {
                    padding: "0px 2px", // 패딩을 0으로 설정
                    fontSize: "1.5rem", // 글씨 크기를 1.5rem으로 설정
                    color: "#404040",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                      borderWidth: 0, // 이 부분이 태두리 라인을 없애는 코드입니다.
                      padding: "0px",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // 마우스를 올렸을 때 태두리 없앰
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // 포커스 상태일 때 태두리 없앰
                    },
                  },
                }}
              />
              <div className="middle-font-small">일 </div>
            </div>
            <div className="box-wether">
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
                  <div className="img-wrapper">
                    <img
                      className="sun"
                      alt="Sun"
                      src="https://generation-sessions.s3.amazonaws.com/1f4a6a2c9226af7359ccac2dc714e5fa/img/sun.png"
                    />
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
            <div>
              <div className="label">
                <div className="text-wrapper">스토리</div>
              </div>
              <TextField
                id="outlined-multiline-flexible"
                multiline
                maxRows={20}
                sx={{ width: "30vw", backgroundColor: "white" }}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", width: "30vw" }}>
          <div>
            <img
              src={
                Object.keys(datajson).length
                  ? datajson.images[pageIdx]
                  : "https://oaidalle apiprodscus.blob.core.windows.net/private/org-7FudgNT689S4DY9WqMjinyG5/user-qVTsJBqKxdS0xiBPNxHVwCqy/img-vZ4HjLo6BWfcCjdgiZ09d5eY.png?st=2023-09-03T02%3A34%3A33Z&se=2023-09-03T04%3A34%3A33Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-02T06%3A15%3A35Z&ske=2023-09-03T06%3A15%3A35Z&sks=b&skv=2021-08-06&sig=9gbESyxKpQc2Z0K/2G094xajgzfL81bZ4lKW4XFm5Rk%3D"
              }
              alt="Description"
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", paddingTop: "20px" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#222", color: "white" }}
          onClick={() => {
            // navigate("/");
            // navigate("/story");
            pageIdx - 1 >= 0 && setPageIdx(pageIdx - 1);
          }}
          disabled={!(pageIdx - 1 >= 0)}
        >
          {"< 이전 단계"}
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#ABC902", color: "white" }}
          onClick={() => {
            pageIdx + 1 < datajson?.sentences.length && setPageIdx(pageIdx + 1);
          }}
          disabled={!(pageIdx + 1 < datajson?.sentences.length)}
        >
          {"다음 단계 >"}
        </Button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { nameAtom, serverData } from "../App";
import { Button, Dialog, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function StoryInputPage() {
  const [name, setName] = useRecoilState(nameAtom);
  const [datajson, setDatajson] = useRecoilState(serverData);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isText, setIsText] = useState(true);
  const [text, setText] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      return;
    }
    // 파일 업로드 로직 (예: 서버로 파일 전송)
    console.log("Uploading:", selectedFile);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sendSentenceToServer = async (to) => {
    try {
      console.log(to);
      const response = await fetch("http://127.0.0.1:8000/app", {
        method: "POST",
        // mode: "cors", // no-cors, *cors, same-origin

        headers: {
          "Content-Type": "application/json",
        },
        // credentials: "same-origin",
        body: JSON.stringify({ sentence: to.sentence, name: to.name }),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse); // 서버로부터의 응답을 출력
        setDatajson({ ...jsonResponse });
        handleClose();
        navigate("/result");
      } else {
        console.log("Request failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="common-page">
      <Dialog open={open} onClose={handleClose}>
        <div className="box">
          <div className="popup-check">
            <div className="overlap">
              <div className="rectangle" />
              <div className="element">
                <div className="text-wrapper">금방끝나요</div>
                <p className="div">
                  Ai가 기록한 내용을 토대로 일기의 내용을 적고있어요.
                </p>
              </div>
              <div className="rectangle-2" />
              <img
                className="https-app"
                alt="Https app"
                src="https://generation-sessions.s3.amazonaws.com/ac5fb4c88857d0a962678fb56854c157/img/https---app-lottiefiles-com-animation-87f4cbbd-d8e5-4e8d-8367-2a.gif"
              />
              <div className="view">
                <div className="overlap-group">
                  <div className="oval-copy" />
                  <div className="oval-copy-2" />
                  <div className="oval" />
                  <div className="oval-copy-3" />
                  <div className="oval-2" />
                  <div className="oval-copy-4" />
                  <img
                    className="path"
                    alt="Path"
                    src="https://generation-sessions.s3.amazonaws.com/ac5fb4c88857d0a962678fb56854c157/img/path-9.svg"
                  />
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="overlap-group-2">
                    <div className="oval-3" />
                    <div className="oval-copy-5" />
                    <div className="oval-copy-6" />
                  </div>
                  <img
                    className="img"
                    alt="Path"
                    src="https://generation-sessions.s3.amazonaws.com/ac5fb4c88857d0a962678fb56854c157/img/path.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
      <div className="middle-font">아이와 함께한 일상의 스토리를</div>
      <div className="middle-font">자유롭게 기록해주세요.</div>
      <div className="middle-font-small">
        Ai가 기록한 내용을 토대로 스토리를 만들어드려요.
      </div>
      <div style={{ display: "flex", gap: "10px", paddingBottom: "20px" }}>
        <Button
          variant="contained"
          style={{
            borderRadius: "26px",
            border: "1px solid #ABC902",
            background: "#FFF",
            color: "#ABC902",
          }}
          onClick={() => {
            setIsText(false);
          }}
        >
          {"보이스 기록"}
        </Button>
        <Button
          variant="contained"
          style={{
            borderRadius: "26px",
            background: "#ABC902",
            color: "white",
          }}
          onClick={() => {
            setIsText(true);
          }}
        >
          {"텍스트 기록"}
        </Button>
      </div>
      {isText ? (
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
      ) : (
        <>
          <input
            accept="audio/*"
            id="contained-button-file"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label htmlFor="contained-button-file">
            <Button
              disabled={selectedFile}
              onClick={handleUpload}
              variant="contained"
              component="span"
              sx={{
                margin: "100px",
              }}
            >
              Select Audio File
            </Button>
          </label>
        </>
      )}

      <div style={{ display: "flex", gap: "10px", paddingTop: "20px" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#222", color: "white" }}
          onClick={() => {
            navigate("/");
          }}
        >
          {"< 이전 단계"}
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#ABC902", color: "white" }}
          onClick={() => {
            // navigate("/result");
            handleClickOpen(true);
            sendSentenceToServer({ name: name, sentence: text });
          }}
        >
          {"다음 단계 >"}
        </Button>
      </div>
    </div>
  );
}

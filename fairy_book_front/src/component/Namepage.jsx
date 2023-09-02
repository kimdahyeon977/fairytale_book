import { useRecoilState } from "recoil";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { nameAtom } from "../App";
import { useNavigate } from "react-router-dom";

export const NamePage = () => {
  const [name, setName] = useRecoilState(nameAtom);
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    if (/[a-zA-Z]/.test(name)) {
      setIsEnglish(true);
    } else if (/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(name)) {
      setIsEnglish(false);
    }
  }, [name]);
  const navigate = useNavigate();

  return (
    <div className="common-page">
      <div>
        <span className="middle-font">아이의 이름은 </span>
        <TextField
          id="outlined-basic"
          label={isEnglish ? "영어" : "한글"}
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          sx={{ backgroundColor: "white" }}
        />

        <span className="middle-font"> 입니다!</span>
      </div>

      <div style={{ display: "block", paddingTop: "20px" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#ABC902", color: "white" }}
          onClick={() => {
            navigate("/story");
          }}
        >
          {"다음 단계 >"}
        </Button>
      </div>
    </div>
  );
};

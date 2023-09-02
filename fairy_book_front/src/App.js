import bottomRightImage from "./images/rd.png";
import bottomLeftImage from "./images/sd.png";
import topLeftImage from "./images/se.png";
import backgroundImage from "./images/Rectangle.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MoveAnimation from "./MoveAnimation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };
  const imageVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };
  const [showImage, setShowImage] = useState(true);
  const isSmallHeight = window.innerWidth < 600;
  return (
    <Router>
      <div>
        <button onClick={() => setShowImage(!showImage)}>Toggle Image</button>

        <div style={backgroundStyle} className="back"></div>
        <AnimatePresence>
          {showImage && (
            <MoveAnimation
              image={topLeftImage}
              imageVariants={imageVariants}
              imgStyle={{
                position: "fixed",
                top: "0",
                left: "0",
                width: isSmallHeight ? "20vh" : "36vh",
                height: "auto",
                zIndex: "-1",
              }}
              side={true}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showImage && (
            <MoveAnimation
              image={bottomLeftImage}
              imageVariants={imageVariants}
              imgStyle={{
                position: "fixed",
                bottom: "0",
                left: "0",
                width: isSmallHeight ? "20vh" : "36vh",
                height: "auto",
                zIndex: "-1",
              }}
              side={false}
              reverse={true}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showImage && (
            <MoveAnimation
              image={bottomRightImage}
              imageVariants={imageVariants}
              imgStyle={{
                position: "fixed",
                bottom: "0",
                right: "0",
                width: isSmallHeight ? "20vh" : "36vh",
                height: "auto",
                zIndex: "-1",
              }}
              side={true}
              reverse={true}
            />
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<NamePage></NamePage>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/users" element={<div>users</div>} />
        </Routes>
      </div>
    </Router>
  );
}

const NamePage = () => {
  const [name, setName] = useState("");
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    // 간단한 언어 판별 로직
    if (/[a-zA-Z]/.test(name)) {
      setIsEnglish(true);
    } else if (/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(name)) {
      setIsEnglish(false);
    }
  }, [name]);
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
        />

        <span className="middle-font"> 입니다!</span>
      </div>

      <div style={{ display: "block" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#ABC902", color: "white" }}
        >
          {"다음 단계 >"}
        </Button>
      </div>
    </div>
  );
};

export default App;

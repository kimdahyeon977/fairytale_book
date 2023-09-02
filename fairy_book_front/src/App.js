import bottomRightImage from "./images/rd.png";
import bottomLeftImage from "./images/sd.png";
import topLeftImage from "./images/se.png";
import backgroundImage from "./images/Rectangle.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MoveAnimation from "./MoveAnimation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { RecoilRoot } from "recoil";
import { atom } from "recoil";
import { NamePage } from "./component/Namepage";
import StoryInputPage from "./component/StoryInputPage";

export const nameAtom = atom({
  key: "name",
  default: "",
});

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
      <RecoilRoot>
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
            <Route path="/story" element={<StoryInputPage></StoryInputPage>} />
            <Route path="/result" element={<div>users</div>} />
          </Routes>
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;

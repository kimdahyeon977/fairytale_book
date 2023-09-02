import React from "react";
import { useEffect, useState } from "react";

export default function StoryPage() {
  const [pictureUrls, setPictureUrls] = useState([]);
  const sendSentenceToServer = async (sentence) => {
    try {
      const response = await fetch("http://localhost:8000/app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: sentence }),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse); // 서버로부터의 응답을 출력
        setPictureUrls([...jsonResponse]);
      } else {
        console.log("Request failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 함수 사용 예
  useEffect(() => {
    sendSentenceToServer("This is a test sentence.");
  }, []);

  return (
    <div>
      {pictureUrls.map((imageURL) => (
        <img src={imageURL} alt="Example" />
      ))}
    </div>
  );
}

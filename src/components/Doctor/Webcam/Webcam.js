import React, { useEffect, useRef } from "react";
import Button from "../../UI/Button";

const Webcam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    }
    enableStream();
  }, []);

  return (
    <div>
        <h2>비대면 진료</h2>
        <video ref={videoRef} width={640} height={480} autoPlay />
        <div>
            <button>연결 재시도</button>
            <button>마이크 켜기/끄기</button>
        </div>
    </div>
  );
};

export default Webcam;

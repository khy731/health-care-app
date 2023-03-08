import React, { useEffect, useRef } from "react";

import classes from "./Webcam.module.css";
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
        <video className={classes.cam} ref={videoRef} width={640} height={480} autoPlay />
      <div>
            <button className={classes.controlbutton4}>연결 재시도</button>
            <button className={classes.controlbutton4}>마이크 켜기/끄기</button>
      </div>
    </div>
  );
};

export default Webcam;

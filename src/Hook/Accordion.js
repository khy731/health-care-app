import { useState } from "react";

const Accordion = ({ title, content }) => {
  // 토글을 닫아두기 위해 초기값을 false로 설정해두었다.
  const [isCheck, setCheck] = useState(false);

  return (
    <>
      <div
        // 간단하게 내부에 css스타일링
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          boxSizing: "border-box",
          backgroundColor: "gray",
          width: "100%",
          height: "60px",
          color: "#fff"
        }}
      >
        <h1 style={{ fontSize: "30px" }}>{title}</h1>
        <button
          onClick={() => {
            setCheck((e) => !e);
          }}
        >
          {isCheck ? "-" : "+"}
        </button>
      </div>
      {isCheck && (
        <p
          style={{
            margin: "0",
            backgroundColor: "skyblue",
            color: "#fff",
            padding: "10px"
          }}
        >
          {content}
        </p>
      )}
    </>
  );
}

export default Accordion;
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isCheck, setCheck] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          boxSizing: "border-box",
          backgroundColor: "gray",
          width: "100%",
          height: "60px",
          color: "#fff",
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
        <ul
          style={{
            listStyleType: "none",
            margin: "0",
            padding: "0",
            backgroundColor: "skyblue",
            color: "#fff",
          }}
        >
          {content.map((item, index) => (
            <li key={index}>
              <ul style={{ listStyleType: "disc" }}>
                <li>{item.res_date}</li>
                <li>{item.doctor_name}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Accordion;

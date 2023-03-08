import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";

import classes from "./Diagnosis.module.css";
const Diagnosis = ({ selectedTreat, selectedDiaNum }) => {
  const [isShowed, setIsShowed] = useState(false);
  const [preName, setPreName] = useState("");
  const [contents, setContents] = useState("");
  const [oneDay, setOneDay] = useState("");
  const [total, setTotal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const preNameHandler = (e) => {
    setPreName(e.target.value);
  }

  const contentsHandler = (e) => {
    setContents(e.target.value);
  }

  const oneDayHandler = (e) => {
    setOneDay(e.target.value);
  }

  const totalHandler = (e) => {
    setTotal(e.target.value);
  }

  const clickHandler = (e) => {
    e.preventDefault();
    setIsShowed(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8080/doctor/${selectedDiaNum}/prescription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              contents,
              pre_name: preName,
              one_day: oneDay,
              total,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("처방이 완료되지 않았습니다.");
      }

      const data = await response.json();

      if (data.result === "OK") {
        alert("처방이 완료되었습니다.");
      } else {
        alert("처방에 실패하였습니다.");
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.diagbox}>
    <Card>
      <div className={classes.top}>진단 처방</div>
      <div className={classes.diagsmallbox}>
      <Card>
        <form onSubmit={clickHandler}>
          <div className={classes.top2}>진단</div>
          <div className={classes.list}>
            <label>이름</label>
            <input value={selectedTreat.name}></input>
          </div>
          <div className={classes.list}>
            <label>생년월일</label>
            <input value={selectedTreat.born} />
          </div>
          <div className={classes.list}>
            <span>특이사항</span>
            <textarea
              placeholder="ex.기침" value={selectedTreat.note} readOnly/>
          </div>
          <div className={classes.list}>
            <span>진단명</span>
            <textarea placeholder="ex. 감기" value={selectedTreat.symptom} readOnly />
          </div>
          <div className={classes.background}>
            <button className={classes.controlbutton2} type="submit">진단하기</button>
          </div>
        </form>
      </Card>

      {isShowed && (
        <Card>
          <form onSubmit={submitHandler}>
            <div className={classes.top3}>처방</div>
            <div className={classes.list}>
              <span>처방명</span>
              <textarea placeholder="ex.타이레놀" onChange={preNameHandler} value={preName}/>
            </div>
            <div className={classes.list}>
              <span>처방 내용</span>
              <textarea placeholder="ex.두통약" onChange={contentsHandler} value={contents} />
            </div>
            <div className={classes.list}>
              <span>일일 복용 횟수</span>
              <textarea placeholder="ex.3" onChange={oneDayHandler} value={oneDay} />
            </div>
            <div className={classes.list}>
              <span>총 복용일</span>
              <textarea placeholder="ex.4" onChange={totalHandler} value={total} />
            </div>
            <div className={classes.background}>
              <button className={classes.controlbutton2} type="submit" htmlType="submit">
                처방하기
              </button>
            </div>
          </form>
        </Card>
      )}
      </div>
    </Card>
    </div>
  );
};

export default Diagnosis;

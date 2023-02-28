import React, { useEffect, useState } from "react";
import Button from "../../UI/Button";
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
          <div>
            <label>이름</label>
            <br />
            <input value={selectedTreat.name}></input>
          </div>
          <div>
            <label>생년월일</label>
            <br />
            <input value={selectedTreat.born} />
          </div>
          <div>
            <label>특이사항(진단내용)</label>
            <br />
            <textarea
              placeholder="ex.기침"
              value={selectedTreat.note}
              readOnly
            />
          </div>
          <div>
            <label>증상</label>
            <br />
            <textarea placeholder="ex. 감기" value={selectedTreat.symptom} readOnly />
          </div>
          <div>
            <button type="submit">진단하기</button>
          </div>
        </form>
      </Card>
      {isShowed && (
        <Card>
          <form onSubmit={submitHandler}>
            <div>
              <label>처방명</label>
              <br />
              <textarea placeholder="감기" onChange={preNameHandler} value={preName}/>
            </div>
            <div>
              <label>처방 내용</label>
              <br />
              <textarea placeholder="두통약" onChange={contentsHandler} value={contents} />
            </div>
            <div>
              <label>일일 복용 횟수</label>
              <br />
              <textarea placeholder="ex.3" onChange={oneDayHandler} value={oneDay} />
            </div>
            <div>
              <label>총 복용일</label>
              <br />
              <textarea placeholder="ex.7" onChange={totalHandler} value={total} />
            </div>
            <div>
              <Button type="submit" htmlType="submit">
                처방하기
              </Button>
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

import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";

const Diagnosis = ({ selctedTreat, selectedDiaNum }) => {
  const [isShowed, setIsShowed] = useState(false);
  const [preName, setPreName] = useState("");
  const [contents, setContents] = useState("");
  const [oneDay, setOneDay] = useState("");
  const [total, setTotal] = useState("");

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

  const submitHandler = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/doctor/${selectedDiaNum}/prescription`, {
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
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result === "OK") {
          return alert("처방이 완료되었습니다");
        }
        if (response.result === "Fail") {
          alert(response.content);
        } else {
          alert("잘못된 시도입니다");
        }
      });
  };

  return (
    <Card>
      <div>
        <h2>진단 처방</h2>
      </div>
      <Card>
        <form onSubmit={clickHandler}>
          <div>
            <label>이름</label>
            <br />
            <input value={selctedTreat.name}></input>
          </div>
          <div>
            <label>생년월일</label>
            <br />
            <input value={selctedTreat.born} />
          </div>
          <div>
            <label>특이사항(진단내용)</label>
            <br />
            <textarea placeholder="ex.기침" />
          </div>
          <div>
            <label>증상</label>
            <br />
            <textarea placeholder="ex. 감기" />
          </div>
          <div>
            <Button type="submit" htmlType="submit">
              진단하기
            </Button>
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
    </Card>
  );
};

export default Diagnosis;

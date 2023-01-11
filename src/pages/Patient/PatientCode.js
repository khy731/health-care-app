
import React, { useState, useEffect } from 'react';

import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const PatientCode = (props) => {

    const [id, setId] = useState("");
    const [code, setCode] = useState("");

    useEffect(() => {
        if(sessionStorage.getItem('patient_id') === null){
          console.log('회원 정보가 없습니다. 로그인하세요.');
        } else {
          setId(sessionStorage.getItem('patient_id'));
        }
      });

  const onChangeHandler = e => {
    setCode(e.target.value);
  }

  const PatientCodeHandler = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/patient/${id}/code`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data : {
            code: code
        }
      }),
    })
  .then((response) => response.json())
  .then(res => {
    if (res.result === 'OK') {
        alert("매칭이 완료되었습니다");
    }
    if (res.result === "Fail") {
        alert("서버 오류로 매칭이 실패했습니다. 다시 시도해주세요.");
    }
    else {
        alert("잘못된 시도입니다.");
    }
  });
}

  return (
      <Card>
        <h3>환자 코드</h3>
        <form onSubmit={PatientCodeHandler}>
          <input id="username" type="text" value={code} onChange={onChangeHandler} placeholder="코드를 입력하세요."/>
          <Button type="submit">코드 매칭하기</Button>
        </form>
      </Card>
  );
};

export default PatientCode;
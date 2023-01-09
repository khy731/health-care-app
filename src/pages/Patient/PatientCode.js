
import React, { useState} from 'react';

import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const PatientCode = (props) => {
  const [code, setCode] = useState();

  const onChangeHandler = e => {
    setCode(e.target.value);
  }

  const PatientCodeHandler = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/Patient/code', {
        method: 'POST',
        body: JSON.stringify({
            id: 1,
            code: code
    }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    if (json.result === 'ok')
    alert("매칭이 완료되었습니다");
  });
      return;
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
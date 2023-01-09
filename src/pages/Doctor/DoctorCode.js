
import React, { useState} from 'react';

import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const DoctorCode = (props) => {
  const [code, setCode] = useState();

  const DoctorCodeHandler = (event) => {
    event.preventDefault();

    setCode(Math.random().toString(16).slice(2, 8));
    console.log(code);

    fetch('http://localhost:3000/doctor/code', {
        method: 'PATCH',
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
    alert("코드 발급이 완료되었습니다");
  });
      return;
    }

  return (
      <Card>
        <h3>의사 코드</h3>
        <form onSubmit={DoctorCodeHandler}>
          <input id="username" type="text" value={code}/>
          <Button type="submit">코드 발급받기</Button>
        </form>
      </Card>
  );
};

export default DoctorCode;
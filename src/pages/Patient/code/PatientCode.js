import React, { useState, useEffect } from 'react';

import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';

const PatientCode = (props) => {

    const [id, setId] = useState("");
    const [code, setCode] = useState("");

    useEffect(() => {
        if(sessionStorage.getItem('patient_id') === null){
          console.log('회원 정보가 없습니다. 로그인하세요.');
        } else {
          setId(sessionStorage.getItem('patient_id'));
        }
    }, [id]);

    const onChangeHandler = e => {
        setCode(e.target.value);
    }

    const PatientCodeHandler = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8080/patient/${id}/code`, {
            method: "POST",
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
            } else if (res.result !== "Fail") {
                alert("서버 오류로 매칭이 실패했습니다. 다시 시도해주세요.");
            }
        })
        .catch((error) => {
            alert("서버와의 연결이 끊겼습니다. 다시 시도해주세요.");
        });
    }

    return (
        <Card>
            <h2>연결 코드 입력</h2>
            <form onSubmit={PatientCodeHandler}>
                <label>코드를 입력하면 담당의와 연결됩니다.</label>
                <input id="username" type="text" value={code} onChange={onChangeHandler} placeholder="코드를 입력하세요."/>
                <Button type="submit">입력하기</Button>
            </form>
        </Card>
    );
};

export default PatientCode;
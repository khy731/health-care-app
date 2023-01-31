import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hook/UseFetch";
import Button from "../../UI/Button";

const ReserveSubmit = ( {id, doctorData} ) => {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [timeTable, setTimeTable] = useState({});
  const [availableTime, setAvailableTime] = useState({});
  const [time, setTime] = useState("");
  const [symptom, setSymptom] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const timeData = [
    {num:1, time: "9:00"},
    {num:2, time: "9:30"},
    {num:3, time: "10:00"},
    {num:4, time: "10:30"},
    {num:5, time: "14:00"},
    {num:6, time: "14:30"},
    {num:7, time: "15:00"},
    {num:8, time: "15:30"},
  ];

  const navigate = useNavigate();

  useEffect(() => {
    if (doctor && date) {
        setIsSelected(true);
    }
    if (isSelected) {
        fetch(`http://localhost:8080/patient/${id}/reservation/getDate`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data : {
            sel_doctor_id: doctor,
            res_date: date
        }
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result === "OK") {
            setTimeTable(response.res_time);
            const availableData = timeData.filter((v,i) => timeTable.includes(i+1));
            setAvailableTime(availableData);
        }
        if (response.result === "Fail") {
          alert("잠시만 기다려주세요");
        }
      });
    }
  })

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/patient/reservation", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data : {
            patiector_id: doctor,
            contents: symptom,
            res_datnt_id: id,
            sel_doe: date,
            res_time: time
        }
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result === "OK") {
          return alert("예약이 완료되었습니다");
        }
        if (response.result === "Fail") {
          alert(response.content);
        }
        else {
            alert('잘못된 시도입니다');
        }
      });
  };

  const onChangeDoctor = (e) => {
    setDoctor(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeTime = (e) => {
    setTime(e.target.value);
  };
  const onChangeSymptom = (e) => {
    setSymptom(e.target.value);
  };

  const cancleHandler = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>담당의</label>
        <br />
        <select onChange={onChangeDoctor}>
            {doctorData.map(v => {
                <option value={v.name}>{v.name} : {v.major}</option>
            })}
        </select>
      </div>
      <div>
        <label>예약 날짜</label>
        <br />
            <input type="date" onChange={onChangeDate} />
      </div>
      <div>
        <label>예약 시간</label>
        <br />
        <select onChange={onChangeTime}>
            {availableTime.map(v => {
                <option value={v.num}>{v.time}</option>
            })}
        </select>
      </div>
      <div>
        <label>증상</label>
        <br />
        <input type="text" value={symptom} onChange={onChangeSymptom} />
      </div>
      <div>
        <Button type="submit" htmlType="submit" onClick={onSubmit}>
          예약하기
        </Button>
      </div>
    </form>
  );
};

export default ReserveSubmit;

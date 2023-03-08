import React, { useState, useCallback } from "react";

const PatientDailyForm = () => {
  // useState를 사용하여 각 input 요소의 값을 저장합니다.
  const [date, setDate] = useState(getTodayDate()); // 오늘 날짜를 기본값으로 설정합니다.
  const [medication, setMedication] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [mood, setMood] = useState(0);
  const [diary, setDiary] = useState("");
  const [sensor, setSensor] = useState("");

  // 오늘 날짜를 반환하는 함수입니다.
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}/${month}/${day}`;
  }

  // 약 복용 상태를 토글하는 함수입니다.
  function toggleMedication(type) {
    if (medication.includes(type)) {
      setMedication(medication.filter((item) => item !== type));
    } else {
      setMedication([...medication, type]);
    }
  }

  // 운동량 상태를 토글하는 함수입니다.
  function toggleExercise(type) {
    if (exercise.includes(type)) {
      setExercise(exercise.filter((item) => item !== type));
    } else {
      setExercise([...exercise, type]);
    }
  }

  // 상태를 변경하는 함수입니다.
  function handleMoodChange(value) {
    setMood(value);
  }

  // 일기를 작성하는 함수입니다.
  function handleDiaryChange(event) {
    setDiary(event.target.value);
  }

  // 센서값을 입력하는 함수입니다.
  function handleSensorChange(event) {
    setSensor(event.target.value);
  }

  return (
    <form>
      <div>
        <label>
          날짜
          <input type="text" value={date} readOnly />
        </label>
      </div>
      <div>
        <label>
          약 복용
          <button type="button" onClick={() => toggleMedication("morning")}>
            아침
          </button>
          <button type="button" onClick={() => toggleMedication("lunch")}>
            점심
          </button>
          <button type="button" onClick={() => toggleMedication("dinner")}>
            저녁
          </button>
        </label>
      </div>
      <label>
        운동량
        <button type="button" onClick={() => toggleExercise("< 30 mins")}>
          30분 이하
        </button>
        <button type="button" onClick={() => toggleExercise("1 hour +")}>
          1시간 이상
        </button>
        <button type="button" onClick={() => toggleExercise("10,000 steps")}>
          10,000 걸음 달성
        </button>
      </label>
      <div>
        <label>
          오늘의 상태
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleMoodChange(index + 1)}
              style={{ color: index < mood ? "orange" : "gray" }}
            >
              ★
            </button>
          ))}
        </label>
      </div>
      <div>
        <label>
          일기
          <textarea value={diary} onChange={handleDiaryChange} />
        </label>
      </div>
      <div>
        <label>
          센서 값
          <input type="text" value={sensor} onChange={handleSensorChange} />
        </label>
      </div>
    </form>
  );
};

export default PatientDailyForm;

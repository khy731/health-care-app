import React, { useState, useCallback } from "react";

import classes from "./PatientDailyForm.module.css";
const PatientDailyForm = () => {
  const [date, setDate] = useState(getTodayDate());
  const [medication, setMedication] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [mood, setMood] = useState(0);
  const [diary, setDiary] = useState("");
  const [sensor, setSensor] = useState("");

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}/${month}/${day}`;
  }

  function toggleMedication(type) {
    if (medication.includes(type)) {
      setMedication(medication.filter((item) => item !== type));
    } else {
      setMedication([...medication, type]);
    }
  }

  function toggleExercise(type) {
    if (exercise.includes(type)) {
      setExercise(exercise.filter((item) => item !== type));
    } else {
      setExercise([...exercise, type]);
    }
  }

  function handleMoodChange(value) {
    setMood(value);
  }

  function handleDiaryChange(event) {
    setDiary(event.target.value);
  }

  function handleSensorChange(event) {
    setSensor(event.target.value);
  }

  const createDiary = useCallback(async () => {
    try {
      const response = await fetch(`/patient/{id}/diary`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // 포맷 참고
          date,
          medication,
          exercise,
          mood,
          diary,
          sensor,
        }),
      });

      if (response.ok) {
        console.log("일기 작성 성공");
        setDate(getTodayDate());
        setMedication([]);
        setExercise([]);
        setMood(0);
        setDiary("");
        setSensor("");
        alert("일기 작성이 완료되었습니다.")
      } else {
        console.error("오류 발생");
        alert("오류가 발생했습니다. 잠시만 기다려주세요.");
      }
    } catch (error) {
      console.error("오류: ", error);
    }
  }, [date, medication, exercise, mood, diary, sensor]);

  const editDiary = useCallback(async () => {
    try {
      const response = await fetch(`/patient/{id}/diary/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          medication,
          exercise,
          mood,
          diary,
          sensor,
        }),
      });

      if (response.ok) {
        console.log("수정 완료");
        // 수정 반영 필요 시 이후 보완
      } else {
        console.error("오류 발생");
      }
    } catch (error) {
      console.error("오류: ", error);
    }
  }, [date, medication, exercise, mood, diary, sensor]);

  return (
    <div className={classes.dailyBox}>
    <div className={classes.top}>오늘의 일지</div>
    <div className={classes.dailySmallBox}>
    <form>
      <div className={classes.list}>
        <label>날짜</label>
          <input type="text" value={date} readOnly />
      </div>
      <div className={classes.list}>
        <label>약 복용</label>
          <button type="button" onClick={() => toggleMedication("morning")}>
            아침
          </button>
          <button type="button" onClick={() => toggleMedication("lunch")}>
            점심
          </button>
          <button type="button" onClick={() => toggleMedication("dinner")}>
            저녁
          </button>
      </div>
      <div className={classes.list}>
        <label>운동량</label>
          <button type="button" onClick={() => toggleExercise("< 30 mins")}>
            30분 이하
          </button>
          <button type="button" onClick={() => toggleExercise("1 hour +")}>
            1시간 이상
          </button>
          <button type="button" onClick={() => toggleExercise("10,000 steps")}>
            10,000 걸음 달성
          </button>
      </div>
      <div className={classes.list}>
        <label>상태</label>
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
      </div>
      <div className={classes.list}>
        <label>일기</label>
          <textarea value={diary} onChange={handleDiaryChange} />
      </div>
      <div>
        <button type="button" onClick={createDiary}>
          일기 작성하기
        </button>
        <button type="button" onClick={editDiary}>
          일기 수정하기
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default PatientDailyForm;

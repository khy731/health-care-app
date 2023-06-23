import React, { useState, useCallback } from "react";

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
        활동 정도
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
          일기 내용
          <textarea value={diary} onChange={handleDiaryChange} />
        </label>
      </div>
      <div>
        <label>
          센서 값
          <input type="text" value={sensor} onChange={handleSensorChange} />
        </label>
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
  );
};

export default PatientDailyForm;

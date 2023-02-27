import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import DoctorReserveList from "./DoctorReserveList";

const DoctorReserveInfo = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [reserveList, setReserveList] = useState([]);

  useEffect(() => {
    const equalData = data.filter((v) => v.res_date === selectedDate);
    setReserveList(equalData);
    console.log(data, selectedDate, equalData);
  }, [data, selectedDate]);

  const onDateHandler = (e) => {
    const date = new Date(e.target.value);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const clickedDate = `${year}/${month}/${day}`;
    setSelectedDate(clickedDate);
  };

  return (
    <>
      <div>
        <h2>추후 예약 일정</h2>
      </div>
      <Card>
        <label>날짜 선택</label>
        <input type="date" onChange={onDateHandler} />
      </Card>
      <Card>
        {reserveList.map((v) => (
          <DoctorReserveList key={v.id} data={v} />
        ))}
      </Card>
    </>
  );
};

export default DoctorReserveInfo;

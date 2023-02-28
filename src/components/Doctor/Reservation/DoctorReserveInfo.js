import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import DoctorReserveList from "./DoctorReserveList";

import classes from "./DoctorReserveInfo.module.css";
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
    <div className={classes.docreservebox}>
      <div className={classes.top}>추후 예약 일정</div>
      <div className={classes.reservebox}>
      <Card>
        <div className={classes.positionchange}>날짜 선택</div>
        <div className={classes.datebox}>
          <input type="date" onChange={onDateHandler} />
        </div>
      </Card>
      <Card>
        {reserveList.map((v) => (
          <DoctorReserveList key={v.id} data={v} />
        ))}
      </Card>
      </div>
    </div>
  );
};

export default DoctorReserveInfo;
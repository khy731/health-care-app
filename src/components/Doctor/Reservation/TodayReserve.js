import Card from "../../UI/Card";
import DoctorReserveList from "./DoctorReserveList";

import classes from "./TodayReserve.module.css";
const TodayReserve = ({ data }) => {
  return (
    <div className={classes.todayreservebox}>
      <div className={classes.top}>금일 예약 정보</div>
      <div className={classes.reservebox}>
      {data && data.length > 0 ? (
        <Card>
          <div className={classes.middle}>진료가 예정되어 있습니다.</div>
          {data.map((v) => (
            <DoctorReserveList data={v} key={v.id} />
          ))}
        </Card>
      ) : (
        <Card>
          <div className={classes.middle}>예정된 진료가 없습니다.</div>
        </Card>
      )}
      </div>
    </div>
  );
};

export default TodayReserve;
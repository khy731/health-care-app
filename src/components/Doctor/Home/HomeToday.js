import Card from "../../UI/Card";
import HomeTodayList from "./HomeTodayList";

import classes from "./HomeToday.module.css";
const HomeToday = ({ data }) => {
  return (
    <div className={classes.todayreservebox}>
      <div className={classes.top}>금일 예약</div>
      <div className={classes.reservebox}>
      {data && data.length > 0 ? (
        <Card>
          <div className={classes.middle}>진료가 예정되어 있습니다.</div>
          {data.map((v, i) => (
            <HomeTodayList info={v} key={i} />
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

export default HomeToday;

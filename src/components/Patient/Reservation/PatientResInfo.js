import Card from "../../UI/Card";

import classes from "./PatientResInfo.module.css";
const PatientResInfo = ({ data }) => {
  return (
    <div className={classes.reservebox}>
      <div className={classes.top}>예약 정보</div>
      <div className={classes.reservesmallbox}>
      {data && data.length > 0 ? (
        <Card>
          <div className={classes.middle}>진료가 예정되어 있습니다.</div>
            {data.map((v, i) => {
              <ul id={i}>
              <div className={classes.listbox}>
                <div>
                  <i className="fa-regular fa-calendar">&nbsp;&nbsp;</i>
                  <span>{v.res_date}</span>
                </div>
                <div>
                  <i className="fa-regular fa-clock">&nbsp;&nbsp;</i>
                  <span>{v.res_time}</span>
                </div>
                <div>
                  <i className="fa-regular fa-user">&nbsp;&nbsp;</i>
                  <span>{v.doctor_name}</span>
                </div>
              <button className={classes.controlbutton}>예약 취소</button>
            </div>
            </ul>;
            })}
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

export default PatientResInfo;
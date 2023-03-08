import { useEffect } from "react";
import classes from "./TreatInfo.module.css";

const TreatInfo = ({ data, setSelectedDiaNum }) => {

  useEffect(() => {
    setSelectedDiaNum(data.dia_num);
  }, [data.dia_num, setSelectedDiaNum]);

  return (
    <div className={classes.treatlist}>
      <span>{data.dia_date}</span>
      <span>{data.disease}</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.contents}</span>
      <span>{data.prescription_list.pre_name}</span>
      <span/>
      <span/>
      <span/>
    </div>
  );
};

export default TreatInfo;

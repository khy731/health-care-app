import { useEffect } from "react";
import classes from "./TreatInfo.module.css";

const TreatInfo = ({ data, setSelectedDiaNum }) => {

  useEffect(() => {
    setSelectedDiaNum(data.dia_num);
  }, [data.dia_num, setSelectedDiaNum]);

  return (
    <table>
    <tr className={classes.treatlist}>
      <td className={classes.one}>{data.dia_date}</td>
      <td className={classes.one}>{data.disease}</td>
      <td className={classes.one}>{data.contents}</td>
      <td className={classes.one}>{data.prescription_list.pre_name}</td>
    </tr>
    </table>
  );
};

export default TreatInfo;

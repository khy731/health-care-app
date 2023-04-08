import Card from "../../UI/Card";
import PatientInfoList from "./PatientInfoList";

import classes from "./DoctorPatientList.module.css";
const DoctorPatientList = ({ data, setSelected }) => {
    
  return (
    <div className={classes.treatlistbox}>
    <Card>
      <div className={classes.top}>환자 목록</div>
      <div className={classes.treatlist}>
        <table>
        <tr className={classes.inform}>
          <td className={classes.one}>이름</td>
          <td className={classes.two}>&nbsp;&nbsp;성별</td>
          <td className={classes.three}>생년월일</td>
          <td className={classes.four}>전화번호</td>
        </tr>
        </table>
        <div className={classes.bottom}/>
      {data.map((v, i) => (
        <PatientInfoList data={v} key={v.patient_id} onClick={()=>{setSelected(i)}} />
      ))}
      </div>
    </Card>
    </div>
  );
};

export default DoctorPatientList;
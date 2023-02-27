import Card from "../../UI/Card";
import PatientInfoList from "./PatientInfoList";

const DoctorPatientList = ({ data }) => {
  return (
    <Card>
      <ul>
        <li>이름</li>
        <li>생년월일</li>
        <li>전화번호</li>
      </ul>
      {data.map((v) => (
        <PatientInfoList data={v} key={v.patient_id} />
      ))}
    </Card>
  );
};

export default DoctorPatientList;

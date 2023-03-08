import Card from "../../UI/Card";

const PatientInfoList = ({ data, onClick }) => {
  return (
    <Card>
      <ul>
        <li>{data.name}</li>
        <li>{data.gender}</li>
        <li>{data.born}</li>
        <li>{data.phone}</li>
      </ul>
      <button onClick={onClick}>상세</button>
    </Card>
  );
};

export default PatientInfoList;

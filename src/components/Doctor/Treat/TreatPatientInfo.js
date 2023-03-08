import classes from "./TreatPatientInfo.module.css";

const TreatPatientInfo = ({ data, setSelectedList, setSelectedTreat }) => {
  const listHandler = () => {
    setSelectedList(data.patient_id);
  };

  const treatHandler = () => {
    setSelectedTreat({
      name: data.name,
      born: data.born,
    });
  };

  return (
    <div className={classes.treatlist}>
      <span>{data.name}</span>
      <span>{data.gender}</span>
      <span>{data.born}</span>
      <span>{data.phone}</span>
      <span>
        <button className={classes.controlbutton} onClick={listHandler}>내역</button>
        <button className={classes.controlbutton2} onClick={treatHandler}>진단</button>
      </span>
    </div>
  );
};

export default TreatPatientInfo;

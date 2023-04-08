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
    <table>
    <tr className={classes.treatlist}>
      <td className={classes.one}>{data.name}</td>
      <td className={classes.two}>{data.gender}</td>
      <td className={classes.three}>{data.born}</td>
      <td className={classes.four}>{data.phone}</td>
      <span>
        <button className={classes.controlbutton} onClick={listHandler}>내역</button>
        <button className={classes.controlbutton2} onClick={treatHandler}>진단</button>
      </span>
    </tr>
    </table>
  );
};

export default TreatPatientInfo;

import classes from "./PatientDiaInfo.module.css";

const PatientDiaInfo = ({ data }) => {
    console.log(data);
  
    return (
      <table>
      <tr className={classes.treatlist}>
        <td className={classes.one}>{data.dia_date}</td>
        <td className={classes.one}>{data.dia_contents}</td>
        <td className={classes.one}>{data.disease}</td>
      </tr>
      </table>
    );
  };
  
  export default PatientDiaInfo;
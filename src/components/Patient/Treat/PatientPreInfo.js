import classes from "./PatientPreInfo.module.css";

const PatientDiaInfo = ({ data }) => {
    console.log(data);
  
    return (
      <table className={classes.treatlist}>
        {data.prescription_list && data.prescription_list.length > 0 && (
          <tr>
            <td className={classes.one}>{data.prescription_list[0].pre_name}</td>
            <td className={classes.one}>{data.prescription_list[0].pre_contents}</td>
            <td className={classes.one}>{data.prescription_list[0].one_day}</td>
            <td className={classes.one}>{data.prescription_list[0].total}</td>
          </tr>
        )}
      </table>
    );
  };
  
  export default PatientDiaInfo;
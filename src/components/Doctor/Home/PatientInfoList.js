import classes from "./PatientInfoList.module.css";

const PatientInfoList = ( {data, onClick} ) => {

    return(
      <table>
        <tr className={classes.treatlist}>
          <td className={classes.one}>{data.name}</td>
          <td className={classes.two}>&nbsp;&nbsp;{data.gender}</td>
          <td className={classes.three}>{data.born}</td>
          <td className={classes.four}>{data.phone}</td>
          <span>
              <button className={classes.controlbutton}>상세</button>
          </span>
        </tr>
      </table>
    )
}

export default PatientInfoList;
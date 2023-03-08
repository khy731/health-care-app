import classes from "./PatientInfoList.module.css";

const PatientInfoList = ( {data, onClick} ) => {

    return(
      <div className={classes.treatlist}>
        <span>{data.name}</span>
        <span>{data.gender}</span>
        <span>{data.born}</span>
        <span>{data.phone}</span>
        <span>
            <button className={classes.controlbutton} onClick={onClick}>상세</button>
        </span>
      </div>
    )
}

export default PatientInfoList;

import classes from "./PatientInfoList.module.css";

const PatientInfoList = ( {data, onClick} ) => {

    return(
        <ul onClick={onClick}>
            <li>{data.name}</li>
            <li>{data.gender}</li>
            <li>{data.born}</li>
            <li>{data.phone}</li>
            <span>
            <button className={classes.controlbutton} onClick={onClick}>상세</button>
        </span>
        </ul>
    )
}

export default PatientInfoList;

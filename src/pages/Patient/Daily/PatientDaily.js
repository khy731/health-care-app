import PatientDailyForm from "../../../components/Patient/Daily/PatientDailyForm";
import PatientHeader from "../../../components/Header/PatientHeader";

import classes from './PatientDaily.module.css';
const PatientDaily = () => {
return(
    <>
        <PatientHeader />
        <div className={classes.mainbox}>
            <div className={classes.positionchange}>
                <PatientDailyForm />
                <></>
            </div>
        </div>
    </> 
);
}

export default PatientDaily;
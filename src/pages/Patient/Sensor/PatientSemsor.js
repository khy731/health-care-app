import PatientHeader from "../../../components/Header/PatientHeader";

import HealthMonitor from "../../../components/Patient/Sensor/HealthMonitor";
import HealthPage from "../../../components/Patient/Sensor/HealthPage";

import classes from './PatientSemsor.module.css';
const PatientSensor = () => {
    return (
        <>
            <PatientHeader />
            <div className={classes.mainbox}>
                <div className={classes.positionchange}>
                    <HealthMonitor />
                    <HealthPage />
                </div>
            </div>
        </>
    )
}

export default PatientSensor;
import HealthBox from "./HealthBox"
import RealTimeGraph from "./RealTimeGraphjs"

import classes from "./Electrocardiogram.module.css";
const Electrocardiogram = () => {
    return(
        <div className={classes.electro}>
            <HealthBox title="심전도" value="Normal" isNormal={true} />
            <RealTimeGraph values={[]} labels={[]} />
        </div>
    )
}

export default Electrocardiogram;
import HealthBox from "./HealthBox"
import RealTimeGraph from "./RealTimeGraphjs"

const Electrocardiogram = () => {
    return(
        <div>
            <HealthBox title="심전도" value="Normal" isNormal={true} />
            <RealTimeGraph values={[]} labels={[]} />
        </div>
    )
}

export default Electrocardiogram;
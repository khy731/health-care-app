import { useState } from "react";
import Card from "../../UI/Card";
import PatientModal from "../Modal/PatientModal";

const HomeTodayList = ( {info} ) => {

    const [isShow, setIsShow] = useState(false);

    const toggleShow = () => {
        setIsShow(!isShow);
    }

    return(
        <Card>
        <ul>
            <li>{info.name}</li>
            <li>{info.born}</li>
            <li>{info.phone}</li>
        </ul>
        <button onClick={toggleShow}>환자 정보</button>
        {isShow && <PatientModal isOpen={isShow}/>}
        </Card>
    )
}

export default HomeTodayList;
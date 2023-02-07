import { useEffect } from "react";

const TreatInfo = ( {data, setSelectedDiaNum} ) => {

    // 처방(prescription) 부분 수정필요
    useEffect(() => {
        setSelectedDiaNum(data.dia_num);
    }, [data]);

    return (
        <ul>
            <li>{data.dia_date}</li>
            <li>{data.disease}</li>
            <li>{data.contents}</li>
            <li>{data.prescription_list.pre_name}</li>
        </ul>
    )
}

export default TreatInfo;
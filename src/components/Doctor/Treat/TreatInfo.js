import { useEffect } from "react";

const TreatInfo = ({ data, setSelectedDiaNum }) => {

  useEffect(() => {
    setSelectedDiaNum(data.dia_num);
  }, [data.dia_num, setSelectedDiaNum]);

    // 처방(prescription) 부분 수정필요

  return (
    <ul>
      <li>{data.dia_date}</li>
      <li>{data.disease}</li>
      <li>{data.contents}</li>
      <li>{data.prescription_list[0].pre_name}</li>
    </ul>
  );
};

export default TreatInfo;

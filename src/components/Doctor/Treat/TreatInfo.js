import { useEffect } from "react";

const TreatInfo = ({ data, setSelectedDiaNum }) => {

  useEffect(() => {
    setSelectedDiaNum(data.dia_num);
  }, [data.dia_num, setSelectedDiaNum]);

  return (
    <div>
      <span>{data.dia_date}</span>
      <span>{data.disease}</span>
      <span>{data.contents}</span>
      <span>{data.prescription_list.pre_name}</span>
    </div>
  );
};

export default TreatInfo;

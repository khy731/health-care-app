import { useState } from "react";
import Diagnosis from "../../../components/Doctor/Treat/Diagnosis";
import TreatList from "../../../components/Doctor/Treat/TreatList";
import TreatPatientList from "../../../components/Doctor/Treat/TreatPatientList";
import Button from "../../../components/UI/Button";

const DoctorTreat = () => {
  const [selectedList, setSelectedList] = useState("patient4");
  const [selectedTreat, setSelectedTreat] = useState("");
  const [selectedDiaNum, setSelectedDiaNum] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(true);
  };

  return (
    <>
      <TreatPatientList
        setSelectedList={setSelectedList}
        setSelectedTreat={setSelectedTreat}
      />
      <TreatList
        selectedList={selectedList}
        setSelectedDiaNum={setSelectedDiaNum}
      />
      {!isClicked && <Button onClick={onClickHandler}>처방하기</Button>}
      {isClicked && (
        <Diagnosis
          selectedTreat={selectedTreat}
          selectedDiaNum={selectedDiaNum}
        />
      )}
    </>
  );
};

export default DoctorTreat;

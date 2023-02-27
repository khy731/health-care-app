import { useState } from "react";
import Diagnosis from "../../../components/Doctor/Treat/Diagnosis";
import TreatList from "../../../components/Doctor/Treat/TreatList";
import TreatPatientList from "../../../components/Doctor/Treat/TreatPatientList";

const DoctorTreat = () => {
  const [selectedList, setSelectedList] = useState("patient4");
  const [selectedTreat, setSelectedTreat] = useState("");
  const [selectedDiaNum, setSelectedDiaNum] = useState("");

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
      <Diagnosis
        selectedTreat={selectedTreat}
        selectedDiaNum={selectedDiaNum}
      />
    </>
  );
};

export default DoctorTreat;

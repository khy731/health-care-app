import { useState } from "react";
import Diagnosis from "../../../components/Doctor/Treat/Diagnosis";
import TreatList from "../../../components/Doctor/Treat/TreatList";
import TreatPatientList from "../../../components/Doctor/Treat/TreatPatientList";
import Button from "../../../components/UI/Button";
import DoctorHeader from "../../../components/Header/DoctorHeader";

import classes from "./DoctorTreat.module.css";
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
      <DoctorHeader />
      <div className={classes.mainbox}>
        <div className={classes.positionchange}>
          <div className={classes.column}>
            <TreatPatientList
              setSelectedList={setSelectedList}
              setSelectedTreat={setSelectedTreat}
            />
            <TreatList
              selectedList={selectedList}
              setSelectedDiaNum={setSelectedDiaNum}
            />
          </div>
          <div>
            {!isClicked && <Button onClick={onClickHandler}>진단하기</Button>}
          </div>
          {isClicked && (
            <Diagnosis
              selectedTreat={selectedTreat}
              selectedDiaNum={selectedDiaNum}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorTreat;

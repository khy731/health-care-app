import Diagnosis from "../../../components/Doctor/Treat/Diagnosis";
import TreatList from "../../../components/Doctor/Treat/TreatList";
import TreatPatientList from "../../../components/Doctor/Treat/TreatPatientList";

const DoctorTreat = () => {
  const [selectedList, setSelectedList] = useState("");
  const [selectedTreat, setSelectedTreat] = useState("");
  const [selectedDiaNum, setSelectedDiaNum] = useState("");

  return (
    <div>
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
    </div>
  );
};

export default DoctorTreat;

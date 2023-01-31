import OwnPatientList from "./OwnPatientList";

const DoctorPatientList = ({ patientData }) => {
  return (
    <>
      {patientData.map((patient) => {
        <OwnPatientList {...patient} />;
      })}
    </>
  );
};

export default DoctorPatientList;

DoctorPatientList.defaultProps = {
}
import { useEffect, useState } from "react";
import PatientResInfo from "../../../components/Patient/Reservation/PatientResInfo";
import ReserveSubmit from "../../../components/Patient/Reservation/ReserveSubmit";
import PastSchedule from "./PastSchedule";
import UseFetch from "../../../Hook/UseFetch";

const PatientReservation = () => {
  const [id, setId] = useState("");
  const [reserveData, setReserveData] = useState({});
  const [doctorList, setDoctorList] = useState({});
  const [oneAgoData, setOneAgoData] = useState([]);
  const [twoAgoData, setTwoAgoData] = useState([]);
  const [threeAgoData, setThreeAgoData] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("doctor_id") === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setId(sessionStorage.getItem("doctor_id"));
    }
    const res = UseFetch(
      `http://localhost:8080/patient/${id}/reservation`
    ).data;
    if (res !== null && res !== undefined) {
      setReserveData(res.reservation_list);
      setDoctorList(res.doctor);
      setOneAgoData(res.res_last_list.one);
      setTwoAgoData(res.res_last_list.two);
      setThreeAgoData(res.res_last_list.three);
    }
  });

  return (
    <>
      <PatientResInfo data={reserveData} />
      <PastSchedule
        oneAgoData={oneAgoData}
        twoAgoData={twoAgoData}
        threeAgoData={threeAgoData}
      />
      <ReserveSubmit id={id} doctorData={doctorList} />
    </>
  );
};

export default PatientReservation;

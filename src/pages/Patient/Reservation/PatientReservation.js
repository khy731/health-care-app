import PatientResInfo from "../../../components/Patient/Reservation/PatientResInfo";
import ReserveSubmit from "../../../components/Patient/Reservation/ReserveSubmit";
import PastSchedule from "./PastSchedule";

const PatientReservation = () => {
    const [id, setId] = useState("");
    const [reserveData, setReserveData] = useState({});
    const [doctorList, setDoctorList] = useState({});

    useEffect(() => {
        if(sessionStorage.getItem('doctor_id') === null){
          console.log('회원 정보가 없습니다. 로그인하세요.');
        } else {
          setId(sessionStorage.getItem('doctor_id'));
        }
        const res = UseFetch(`http://localhost:8080/patient/${id}/reservation`).data;
        if (res !== null && res !== undefined) {
          setReserveData(res.reservation_list);
          setDoctorList(res.doctor);
      }
      });

      return(
        <>
            <ReserveSubmit id={id} doctorData={doctorList} />
            <PatientResInfo data={reserveData} />
            <PastSchedule data={reserveData} />
        </>
      );

}

export default PatientReservation;
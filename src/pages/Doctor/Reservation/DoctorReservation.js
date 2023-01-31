import { useEffect, useState } from "react";
import DoctorReserveInfo from "../../../components/Doctor/Reservation/DoctorReserveInfo";
import TodayReserve from "../../../components/Doctor/Reservation/TodayReserve";
import UseFetch from '../../../Hook/UseFetch'

const DoctorReservation = () => {
    const [id, setId] = useState("");
    const [reserveData, setReserveData] = useState({});

    useEffect(() => {
        if(sessionStorage.getItem('doctor_id') === null){
          console.log('회원 정보가 없습니다. 로그인하세요.');
        } else {
          setId(sessionStorage.getItem('doctor_id'));
        }
        const res = UseFetch(`http://localhost:8080/doctor/${id}/reservation`).data;
        if (res !== null && res !== undefined) {
          setReserveData(res);
      }
      });

/*       const todayDate = Date.now().toString();
      const todayReserve = reserveData.filter(v => v.res_date === todayDate); */

      const todayReserve = {
        a: {
            num: 1,
            content: 'dummy'
        },
        b: {
            num: 2,
            content: 'dummy'
        },
      };

    return (
        <>
            <TodayReserve id={id} data={todayReserve} />
            <DoctorReserveInfo id={id} />
        </>
    )
}

export default DoctorReservation;
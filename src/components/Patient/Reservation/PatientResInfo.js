import Card from "../../UI/Card";

const PatientResInfo = ({ data }) => {
  return (
    <>
      <h2>예약 정보</h2>
      <Card>
        <div>진료가 예정되어 있습니다.</div>
          {data.map((v, i) => {
            <ul id={i}>
              <li>{v.res_date}</li>
              <li>{v.res_time}</li>
              <li>{v.doctor_name}</li>
              <button>예약 취소하기</button>
            </ul>;
          })}
      </Card>
    </>
  );
};

export default PatientResInfo;

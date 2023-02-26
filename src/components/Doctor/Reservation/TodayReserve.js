import Card from "../../UI/Card";
import DoctorReserveList from "./DoctorReserveList";

const TodayReserve = ({ data }) => {
  return (
    <>
      <div>
        <h2>금일 예약 정보</h2>
      </div>
      {data && data.length > 0 ? (
        <Card>
          {data.map((v) => (
            <DoctorReserveList data={v} key={v.id} />
          ))}
        </Card>
      ) : (
        <Card>
          <div>진료 예정 내역이 없습니다.</div>
        </Card>
      )}
    </>
  );
};

export default TodayReserve;

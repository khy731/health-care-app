import TodayReserveList from "./TodayReserveList";

const TodayReserve = ({ data }) => {
    
  return (
    <>
      <div>
        <h2>금일 예약 정보</h2>
      </div>
      <div>
        <h4>금일 {data.length}개의 예약이 있습니다. </h4>
      </div>
      {data.map(v => {
        <TodayReserveList list={v} />
      })}
    </>
  );
};

export default TodayReserve;

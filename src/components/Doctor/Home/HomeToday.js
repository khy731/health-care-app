import Card from "../../UI/Card";
import HomeTodayList from "./HomeTodayList";

const HomeToday = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <h2>금일 예약 정보</h2>
      </div>
      <ul>
        <li>이름</li>
        <li>생년월일</li>
        <li>전화번호</li>
      </ul>
      {data && data.length > 0 ? (
        <Card>
          {data.map((v, i) => (
            <HomeTodayList info={v} key={i} />
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

export default HomeToday;

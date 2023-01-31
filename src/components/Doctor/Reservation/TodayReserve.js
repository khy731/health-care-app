import Card from '../../UI/Card';
import DoctorReserveList from './DoctorReserveList';

const TodayReserve = ({ data }) => {
    
  return (
    <>
        <div>
            <h2>금일 예약 정보</h2>
        </div>
        <Card>
            <div>진료가 예정되어 있습니다</div>
            {data.map(v => <DoctorReserveList data={v} />)}
        </Card>
    </>
  );
};

export default TodayReserve;

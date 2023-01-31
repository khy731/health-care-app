import Card from "../../UI/Card";
import DetailInfoList from './DetailInfoList';

const DetailInfo = ({data}) => {
    // 상세정보 추가 예정
    // 현재 일반 정보에 필요한 데이터와 상세 정보에 필요한 데이터 전부 부족
    // API 수정 요청할 것
    // 데이터는 Doctor.js(홈)에서 가져옴

    return(
        <Card>
        <ul>
            <li>이름</li>
            <li>생년월일</li>
            <li>전화번호</li>
        </ul>
        {data.map(v => {
            <DetailInfoList info={v} />
        })}
      </Card>
    )
}

export default DetailInfo;
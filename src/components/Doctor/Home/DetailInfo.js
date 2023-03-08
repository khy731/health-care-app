import Card from "../../UI/Card";

const DetailInfo = ({ data, selected }) => {
  const selectedData = data.filter((v, i) => i === selected);
  console.log(selectedData);

  const ill = [
    "머리가 심하게 울림",
    "속이 매우 쓰리고 메스꺼움",
    "어지럽고 환청이 들림",
    "무릎이 아프고 관절염이 의심됨",
  ];

  const getRandomValueFromArray = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  return (
    <Card>
      <ul>
        <li>이름</li>
        <li>성별</li>
        <li>생년월일</li>
        <li>전화번호</li>
        <li>증상</li>
      </ul>
      {selectedData.length > 0 && (
        <ul>
          <li>{selectedData[0].name}</li>
          <li>{selectedData[0].gender}</li>
          <li>{selectedData[0].born}</li>
          <li>{selectedData[0].phone}</li>
          <li>{getRandomValueFromArray(ill)}</li>
        </ul>
      )}
    </Card>
  );
};

export default DetailInfo;

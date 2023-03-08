import Card from "../../UI/Card";

import classes from "./DetailInfo.module.css";
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
    <div className={classes.mainbox}>
    <Card>
    <div className={classes.top}>상세 정보</div>
      <div className={classes.smallbox}>
      <div className={classes.list}>
        <label>이름</label>
      </div>
      <div className={classes.list}>
        <label>성별</label>
      </div>
      <div className={classes.list}>
        <label>생년월일</label>
      </div>
      <div className={classes.list}>
        <label>전화번호</label>
      </div>
      <div className={classes.list}>
        <label>증상</label>
      </div>
      <div className={classes.list}>
        <span/>
      </div>
      <div className={classes.listlast}>
        <span/>
      </div>

      {selectedData.length > 0 && (
        <ul>
          <li>{selectedData[0].name}</li>
          <li>{selectedData[0].gender}</li>
          <li>{selectedData[0].born}</li>
          <li>{selectedData[0].phone}</li>
          <li>{getRandomValueFromArray(ill)}</li>
        </ul>
      )}
      </div>
    </Card>
    </div>
  );
};

export default DetailInfo;

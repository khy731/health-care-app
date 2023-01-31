import { useEffect, useState } from "react";
import Card from "../../../components/UI/Card";
import Accordion from "../../../Hook/Accordion";

const PastSchedule = ({ data }) => {
  const [past3Date, setPast3Date] = useState("");
  const [past6Date, setPast6Date] = useState("");
  const [past9Date, setPast9Date] = useState("");
  const [past12Date, setPast12Date] = useState("");

  // 날짜에 따른 데이터 컷
  const [past3Reserve, setPast3Reserve] = useState("");
  const [past6Reserve, setPast6Reserve] = useState("");
  const [past9Reserve, setPast9Reserve] = useState("");
  const [past12Reserve, setPast12Reserve] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    // month 조건문 필수
    // 날짜 컷
    // state의 날짜로 data 컷할것
    setPast3Date(year + "-" + month - 3 + "-" + day);
    setPast6Date(year + "-" + month - 6 + "-" + day);
    setPast9Date(year + "-" + month - 9 + "-" + day);
    setPast12Date(year + "-" + month - 12 + "-" + day);
  });
  return (
    <Card>
      {data.map((v) => {
        return (
          <>
            <Accordion
              title="3개월"
              content={past3Reserve.map((v) => {
                return `${v.res_date}`;
              })}
            />
            <Accordion
              title="6개월"
              content={past6Reserve.map((v) => {
                return `${v.res_date}`;
              })}
            />
            <Accordion
              title="9개월"
              content={past9Reserve.map((v) => {
                return `${v.res_date}`;
              })}
            />
            <Accordion
              title="12개월"
              content={past12Reserve.map((v) => {
                return `${v.res_date}`;
              })}
            />
          </>
        );
      })}
    </Card>
  );
};

export default PastSchedule;

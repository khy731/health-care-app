import Card from "../../../components/UI/Card";
import Accordion from "../../../Hook/Accordion";

const PastSchedule = ( {oneAgoData, twoAgoData, threeAgoData} ) => {

  return (
    <>
      <h2>지난 일정</h2>
      <Card>
        <Accordion title="1개월 전" content={oneAgoData} />
        <Accordion title="2개월 전" content={twoAgoData} />
        <Accordion title="3개월 전" content={threeAgoData}/>
      </Card>
    </>
  );
};

export default PastSchedule;

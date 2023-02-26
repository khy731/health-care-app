const DoctorReserveList = ({ data }) => {
  const timeData = [
    { num: 1, time: "9:00" },
    { num: 2, time: "9:30" },
    { num: 3, time: "10:00" },
    { num: 4, time: "10:30" },
    { num: 5, time: "14:00" },
    { num: 6, time: "14:30" },
    { num: 7, time: "15:00" },
    { num: 8, time: "15:30" },
  ];

  const timeMatch = timeData.find((v) => v.num === data.res_time);

  return (
    <>
      <ul>
        <li>{timeMatch.time}</li>
        <li>{data.patient_id.name}</li>
        <li>{data.contents}</li>
      </ul>
      <button>환자 정보</button>
    </>
  );
};

export default DoctorReserveList;

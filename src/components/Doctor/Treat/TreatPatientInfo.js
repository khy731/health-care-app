const TreatPatientInfo = ({ data, setSelectedList, setSelectedTreat }) => {
  const listHandler = () => {
    setSelectedList(data.patient_id);
  };

  const treatHandler = () => {
    setSelectedTreat({
      name: data.name,
      born: data.born,
    });
  };

  return (
    <div>
      <span>{data.name}</span>
      <span>{data.gender}</span>
      <span>{data.born}</span>
      <span>{data.phone}</span>
      <span>
        <button onClick={listHandler}>내역</button>
      </span>
      <span>
        <button onClick={treatHandler}>진단</button>
      </span>
    </div>
  );
};

export default TreatPatientInfo;

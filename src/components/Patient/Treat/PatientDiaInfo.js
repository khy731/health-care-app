const PatientDiaInfo = ({ data }) => {
    console.log(data);
  
    return (
      <ul>
        <li>{data.dia_date}</li>
        <li>{data.dia_contents}</li>
        <li>{data.disease}</li>
        {data.prescription_list && data.prescription_list.length > 0 && (
          <>
            <li>{data.prescription_list[0].pre_name}</li>
            <li>{data.prescription_list[0].pre_contents}</li>
            <li>{data.prescription_list[0].one_day}</li>
            <li>{data.prescription_list[0].total}</li>
          </>
        )}
      </ul>
    );
  };
  
  export default PatientDiaInfo;
  
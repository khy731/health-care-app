const PatientInfoList = ( {data} ) => {
    console.log(data);
    return(
        <ul>
            <li>{data.name}</li>
            <li>{data.born}</li>
            <li>{data.phone}</li>
        </ul>
    )
}

export default PatientInfoList;
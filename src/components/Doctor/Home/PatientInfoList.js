const PatientInfoList = ( {data, onClick} ) => {

    return(
        <ul onClick={onClick}>
            <li>{data.name}</li>
            <li>{data.gender}</li>
            <li>{data.born}</li>
            <li>{data.phone}</li>
        </ul>
    )
}

export default PatientInfoList;
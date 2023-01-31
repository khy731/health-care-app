const PatientInfoList = ( {info} ) => {
    return(
        <ul>
            <li>{info.name}</li>
            <li>{info.born}</li>
            <li>{info.phone}</li>
        </ul>
    )
}

export default PatientInfoList;
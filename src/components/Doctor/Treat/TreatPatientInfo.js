const TreatPatientInfo = ( {data, setSelectedList, setSelectedTreat} ) => {

    const listHandler = () => {
        setSelectedList(data.patient_id);
    }
    
    const treatHandler = () => {
        setSelectedTreat({
            name: data.name,
            born: data.born
        });
    }

    return (
        <ul>
            <li>{data.name}</li>
            <li>{data.gender}</li>
            <li>{data.born}</li>
            <li>{data.phone}</li>
            <li>
                <button onClick={listHandler}>내역</button>
            </li>
            <li>
                <button onClick={treatHandler}>진단</button>
            </li>
        </ul>
    )
}

export default TreatPatientInfo;
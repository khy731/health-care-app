const OwnPatientList = (props) => {
    return(
        <ul>
            <li>{props.name}</li>
            <li>{props.born}</li>
            <li>{props.phone}</li>
        </ul>
    )   
}

export default OwnPatientList;
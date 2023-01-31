const TodayReserveList = ( {list} ) => {

    console.log(list);

    return (
        <ul>
            <li>{list.name}</li>
            <li>{list.gender}</li>
            <li>{list.born}</li>
            <li>{list.phone}</li>
            <li>{list.content}</li>
        </ul>
    )
}

export default TodayReserveList;
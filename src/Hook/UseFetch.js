import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState([]);

    const getData = async() => {
        const res = await fetch(url)
                    .then(res => res.json())
        setData(res);
    };

    useEffect(()=> {
        getData();
    },[url]);

    return data;
};

export default useFetch;
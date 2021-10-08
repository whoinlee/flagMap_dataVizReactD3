import { useState, useEffect } from 'react';
import { csv } from 'd3';


const csv_url = "https://gist.githubusercontent.com/whoinlee/60d3b0760f6c8bddc6968aaa6681053c/raw/Countries_code_flags.csv";

export const useFlagData = () => {
    const [data, setData] = useState(null);

    //--Code,Country,Flag_url
    useEffect(() => {
        csv(csv_url).then(setData);
    }, []);

    return data;
}

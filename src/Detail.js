import React, {useEffect, useState} from 'react';
import DetailView from './components/DetailView';

function Detail (props) {
    const [dataList, setDataList] = useState();
    console.log(props.subject);
    let subject = props.subject.toUpperCase();

    const fetchData = async () => {
        return await fetch('/details/' + props.subject + "/" + props.id)
            .then(response => response.json())
            .then(data => {
                console.log("got data!!")
                console.log(data.results[0])
                setDataList(data.results[0])
            });
    }

    useEffect(() => {
        fetchData()
        console.log(dataList);
    }, []);

    return (
            <div>
                <p>THIS SHOULD BE THE {subject} ID {props.id}</p>
                <a href={"http://localhost:3000/" + props.subject}>back</a>
                {dataList ?
                    <DetailView data={dataList} subject={props.subject}/> : <p><b>Loading...</b></p>}
            </div>
    );
}

export default Detail;

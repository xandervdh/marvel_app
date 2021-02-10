import React from 'react';
import DataComponent from "./components/DataComponent";

function DataList (props) {
    console.log(props.dataList);
    return (
        <>
            <div className="columns is-multiline wrapper">
            {props.dataList && props.dataList.map((data,index) => {
                    let image = data.thumbnail.path + "/portrait_xlarge." + data.thumbnail.extension;
                    return (
                        <DataComponent
                            data={data}
                            image={image}
                            marvel={props.marvel}
                        />
                        )
            }) }
            </div>
        </>
    );
}

export default DataList;

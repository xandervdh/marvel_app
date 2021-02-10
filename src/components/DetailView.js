import React from "react";
import {Link} from "react-router-dom";

function DetailView(props) {
    function checkAmount(param) {
        if (props.data[param].available > 20) {
            return <li>More...</li>;
        }
    }

    function checkIfData(param) {
        if (props.data[param]) {
            console.log("I has " + param);
            return (
                <ul id={param}>
                    {props.data[param].items && props.data[param].items.map((data) => {
                        return (
                            <li><Link to={"/detail/" + param}>{data.name}</Link></li>
                        )
                    })}
                    {checkAmount(param)}
                </ul>
            )
        } else {
            console.log("I has not " + param)
            console.log(props[param])
            return <p><b>Loading...</b></p>
        }
    }
    return (
        <div>
            <p>{"Name: " + props.data.name}</p>
            <p>{"ID: " + props.data.id}</p>
            <img src={props.data.thumbnail.path + "/portrait_xlarge." + props.data.thumbnail.extension} alt={props.subject + "thumbnail"}/>
            <p><b>Description:</b></p>
            {props.data.description ?
                <p>{props.data.description}</p>
                : <p><b>N/A</b></p>
            }
            <br/>
            <h1><b>Comics</b></h1>
            {checkIfData("comics")}
            <br/>
            <h1><b>Stories</b></h1>
            {checkIfData("stories")}
            <br/>
            <h1><b>Events</b></h1>
            {checkIfData("events")}
            <br/>
            <h1><b>Series</b></h1>
            {checkIfData("series")}
            <br/>
        </div>
    )
}

export default DetailView;

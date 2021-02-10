import React from 'react';
import {
    Link
} from "react-router-dom";

function DataComponent(props) {
    return (
        <div className="column is-one-quarter" key={props.data.id}>
            <div className="card">
                <Link className="link" to={"/detail/" + props.marvel + "/" + props.data.id}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={props.image}
                             alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{props.data.name}</p>
                            <p className="title is-4">{props.data.title}</p>
                        </div>
                    </div>

                    <div className="content">

                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default DataComponent;

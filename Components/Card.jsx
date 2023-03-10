import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props){
    return (
        <>
        <div className = "card">
            <div className = "card--box">
                <img src = {props.imageUrl} className = "card--logo"/>
            </div>
            <div className = "card--details">
                <div className = "loc">
                <FontAwesomeIcon icon={faLocationDot} className="card--loc card-loc-logo" />
                    <h2 className="card--loc">{props.location}</h2>
                    <a className="card--loc" href={props.googleMapsUrl}>View On Google Maps</a>
                </div>
                <h3 className = "card-title">{props.title}</h3>
                <p className="date">{`${props.startDate} - ${props.endDate}`}</p>
                <p className = "desc">{props.description}</p>
            </div>
        </div>
        <hr/>
        </>
    )
}
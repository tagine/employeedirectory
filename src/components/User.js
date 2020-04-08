import React from "react";

function User(props) {
    return (
        <div className="text-center">
            <img alt={props.picture.medium} className="img-fluid" src={props.picture.medium} style={{ margin: "0 auto" }} />
            <h3>Last Name: {props.name.last}</h3>
            <h3>First Name: {props.name.first}</h3>
            <h3>Street Address: {props.location.street}</h3>
            <h3>City: {props.location.city}</h3>
            <h3>State: {props.location.state}</h3>
            <h3>Zipcode: {props.location.postcode}</h3>
            <h3>Phone: {props.phone}</h3>
        </div>
    );
}

export default User;
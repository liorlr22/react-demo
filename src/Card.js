import React from "react";
import './styles.css';

function Random(props) {
    var maxNumber = 45;
    var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    return randomNumber;
}

const Card = ({ name, age }) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-image">
                    <img src={'https://robohash.org/' + Random()} alt={`id${name}`} />
                </div>
                <div className="card-content">
                    <h1 className="card-title">Hi {name}</h1>
                    <p className="card-text">You are {age} years old.</p>
                </div>
            </div>
        </div>

    );
}


export default Card;

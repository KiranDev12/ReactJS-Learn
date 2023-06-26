import React from "react";
import katie from "../assets/katie.png"
import star from "../assets/star.png"
export default function card(){
    return (
        <div className="card">
            <img 
                className="card--image"
                src={katie}
            />
            <div className="card--stats">
                <img 
                    className="card--star"
                    src={star}
                />
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>
                <span className="card--price">From $136</span> / Person
            </p>
        </div>
    )
}
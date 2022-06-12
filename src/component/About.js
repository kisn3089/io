import React from 'react';
import "../css/About.css";
import food from "../food.png"


function About() {
    return (
        <>
            <section className="one">
                <div className="title_wrap">
                    <div className="title">
                        awesome food store
                    </div>
                    <p className="titleSub">
                        By Hwang In Sung
                    </p>
                </div>
                <div className="food_wrap">
                    <img className="foodPic" src= { food } />
                </div>
            </section>
        </>
    )
}

export default About;
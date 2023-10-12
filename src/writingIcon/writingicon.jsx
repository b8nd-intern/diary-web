import React from 'react';
import "./writingicon.css";

const writingicon = () => {
    return (
        <div className='writingIcon'>
            <button><img src={require("../img/Emotion (1).png")} alt="writingIconHappy"/></button>
            <button><img src={require("../img/Emotion (2).png")} alt="writingIconLaugh"/></button>
            <button><img src={require("../img/Emotion (3).png")} alt="writingIconWorry"/></button>
            <button><img src={require("../img/Emotion (4).png")} alt="writingIconSad"/></button>
            <button><img src={require("../img/Emotion (5).png")} alt="writingIconAngry"/></button> 
        </div>
    );
};

export default writingicon;
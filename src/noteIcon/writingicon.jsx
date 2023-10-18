import React from 'react';
import "./writingicon.css";
import test1 from "../assets/img/Emotion (1).png"
import test2 from "../assets/img/Emotion (2).png"
import test3 from "../assets/img/Emotion (3).png"
import test4 from "../assets/img/Emotion (4).png"
import test5 from "../assets/img/Emotion (5).png"


const Writingicon = () => {

    const test = [`${test1}`,`${test2}`,`${test3}`,`${test4}`,`${test5}`]
    return (
        <div className='writingIcon'>
            {test.map((key) => {
                return(
                    <button>
                        <img src={key}/>
                    </button>
                )

            })}
            {/* <button><img src={test} alt="writingIconHappy"/></button>
            <button><img src={require("../img/Emotion (2).png")} alt="writingIconLaugh"/></button>
            <button><img src={require("../img/Emotion (3).png")} alt="writingIconWorry"/></button>
            <button><img src={require("../img/Emotion (4).png")} alt="writingIconSad"/></button>
            <button><img src={require("../img/Emotion (5).png")} alt="writingIconAngry"/></button>  */}
        </div>
    );
};

export default Writingicon;
import React from 'react'
import cardImg from "../images/card_img.png";
import startImg from "../images/star.png";

const Card = () => {
    return (
        <div className='card_comp'>
            <img src={cardImg} className='card-img' />
            <div className='card-stat'>
                <img src={startImg} className='card-star'></img>
                <span >5.0</span>
                <span className='gray'>(6).</span>
                <span className='gray'>USA</span>
            </div>
            <p>
                Life lessions with Katie Jafferey
            </p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    )
}

export default Card
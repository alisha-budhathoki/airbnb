import React from 'react'
import groupImg from '../images/group_img.png'

const Body = () => {
    return (
        <div className='body-style'>
            <div className='group-img'>
                <img src={groupImg} />
            </div>
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-text'> Join unique interactive activities led by one-of-a kind hosts -all without leaving home</p>

        </div>
    )
}

export default Body
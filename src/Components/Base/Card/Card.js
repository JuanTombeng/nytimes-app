import React, {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import style from './card.module.css'

const Card = (props) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/articles', {state : {category : props.title} })
    }
    return (
        <div className={style['Card']} onClick={handleClick}>
            <div className={style['card-title']}>
                {props.title}
            </div>
            <div className={style['card-body']}>
                {props.body}
            </div>
        </div>
    )
}

export default Card
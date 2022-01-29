import React from 'react'
import style from './main.module.css'

const Main = ({children}) => {
    return (
        <div className={style['Main']}>
            {children}
        </div>
    )
}

export default Main
import React from 'react'
import style from './header.module.css'

const Header = ({children}) => {
    return (
        <div className={style['Header']}>
            {children}
        </div>
    )
}

export default Header
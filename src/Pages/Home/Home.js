import React, {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import style from './home.module.css'

import Main from '../../Components/Base/Main/Main'
import Header from '../../Components/Module/Header/Header'
import Card from '../../Components/Base/Card/Card'

const Home = () => {
    
    return (
        <div className={style['Home']}>
            <Header />
            <Main>
                <Card title='emailed'/>
                <Card title='shared'/>
                <Card title='viewed'/>
            </Main>
        </div>
    )
}

export default Home
import React, {useState, useEffect, useContext} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import style from './articleList.module.css'
import axios from 'axios'

import Main from '../../Components/Base/Main/Main'
import Header from '../../Components/Module/Header/Header'
import Card from '../../Components/Base/Card/Card'

const ArticleList = () => {
    const [category, setCategory] = useState('')
    const [articles, setArticles] = useState([])
    const [period, setPeriod] = useState(1)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const {state} = useLocation()
    const baseUrl = `${process.env.REACT_APP_BASE_URL}`
    const apiKey = `${process.env.REACT_APP_API_KEY}`

    useEffect(() => {
        state ? setCategory(state.category) : setCategory('')
        axios.get(`${baseUrl}/${state.category}/${period}.json?api-key=${apiKey}`)
        .then((res) => {
            setArticles(res.data.results)
        })
        
    }, [])
    return (
        <div className={style['List']}>
            <Header>
                <h1>{category}</h1>
            </Header>
            <Main>
                {
                    articles.map((article) => {
                        return <Card key={article.id} title={article.title} body={article.abstract}/>
                    })
                }
            </Main>
        </div>
    )
}

export default ArticleList
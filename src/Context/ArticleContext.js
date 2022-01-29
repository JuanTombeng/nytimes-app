import React, {useState, useContext, useEffect, createContext} from "react";
import axios from "axios";

export const articleContext = createContext(null)
const ArticleContext = () => {
    const [articles, setArticles] = useState(null)
    const apiKey = process.env.API_KEY
    const baseUrl = process.env.NYT_API_URL
    useEffect(() => {
        axios({
            baseURL : `${baseUrl}`
        })
    }, [])
}

export default ArticleContext
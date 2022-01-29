import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import style from "./App.css"

import Home from './Pages/Home/Home'
import ArticleList from "./Pages/ArticleList/ArticleList";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/articles' element={<ArticleList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
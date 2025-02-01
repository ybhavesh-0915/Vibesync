import React from 'react'
import Home from './Home.js'
import User from './User.js'
import "../CSS/Main.css"
const Main = () => {
    return (
        <>
            <main data-section="home">
                <Home />
                <User />
            </main>

        </>
    )
}

export default Main
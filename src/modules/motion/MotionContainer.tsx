import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MotionContainer = () => {
    return (
        <div className="app">
            <Header/>
            <main className="document"></main>
            <Footer/>
        </div>
    );
};

export default MotionContainer;

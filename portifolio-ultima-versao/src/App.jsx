import React from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Space from './components/Space'; 
import TopMark from './components/TopMark'; 
import Contact from './components/Contact'; 

import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <TopMark />
            <Presentation />
            <Space />
            <AboutMe />
            <Space />
            <Skills />
            <Space />
            <Projects />
            <Space />
            <Contact />
            
        </div>
    );
};

export default App;
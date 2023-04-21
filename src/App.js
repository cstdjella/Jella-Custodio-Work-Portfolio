import Navbar from "./Components/Navbar/Navbar"
import './App.css'
import Intro from "./Components/intro/Intro";
import About from "./Components/about/About"
import Skills from "./Components/skills/Skills"
import Works from "./Components/works/Works"
import Contact from "./Components/contact/Contact"


import './App.css'
function App () {
    return (
        <div className="App">
            <Navbar/>
            <Intro/>
            <About/>
            <Skills/>
            <Works/>
            <Contact/>

        </div>
    );
}

export default App;
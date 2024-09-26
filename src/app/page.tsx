import Header from "../../components/header";
import Home from "../../components/home";
import Skills from "../../components/skills";
import Projects from "../../components/projects";
import Contact from "../../components/contact"
import '../app/globals.css';

export default function Main() {
    return (
        <div className="text-base md:text-lg lg:text-xl">
            <div>
            <Header/>
            </div>
            <div id="home">
            <Home/>
            </div>
            <div id="skills">
            <Skills/>
            </div>
            <div id="projects">
            <Projects/>
            </div>
            <div id="contact">
            <Contact/>
            </div>
    </div>
    );
}
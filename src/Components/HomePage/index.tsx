import { Stack } from "react-bootstrap";
import NavBar from "../Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
    return (
        <Stack gap={3} className="home-page">
            <div className="d-flex flex-column">
                <NavBar />
                <Hero />
                <AboutMe />
                <Projects/>
                <Skills/>
            </div>
        </Stack>
    );
}
export default Home;
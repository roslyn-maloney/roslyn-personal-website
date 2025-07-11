import { Stack } from "react-bootstrap";
import NavBar from "../Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificate from "./Certificate";
import Connect from "./Connect";

function Home() {
    return (
        <Stack gap={3} className="home-page">
            <div className="d-flex flex-column">
                <NavBar />
                <Hero />
                <AboutMe />
                <Projects/>
                <Skills/>
                <Certificate/>
                <Connect/>
            </div>
        </Stack>
    );
}
export default Home;
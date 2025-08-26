import { Stack } from "react-bootstrap";
import NavBar from "../Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificate from "./Certificate";
import Connect from "./Connect";
import { useRef } from "react";

function Home() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const certificateRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      };

      
    return (
        <Stack gap={3} className="home-page">
            <div className="d-flex flex-column">
                <NavBar scrollTo={scrollTo} refs={{ aboutRef, projectsRef, skillsRef, certificateRef, contactRef }}/>
                <Hero />
                <AboutMe ref={aboutRef}/>
                <Projects ref={projectsRef}/>
                <Skills ref={skillsRef}/>
                <Certificate ref={certificateRef}/>
                <Connect ref={contactRef}/>
            </div>
        </Stack>
    );
}
export default Home;
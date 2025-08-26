import Logo from "../Assets/Logo.svg";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";


type SectionRef = React.RefObject<HTMLDivElement | null>;

type NavBarProps = {
    scrollTo: (ref: SectionRef) => void;
    refs: {
        aboutRef: SectionRef;
        projectsRef: SectionRef;
        skillsRef: SectionRef;
        certificateRef: SectionRef;
        contactRef: SectionRef;
    };
};


function NavBar({ scrollTo, refs }: NavBarProps) {
    const navigate = useNavigate();
    return (<>
        <Navbar className="shadow" fixed="top">
            <div>
                <Navbar.Brand href="/Home" className="m-0">
                    <Image className="logo" src={Logo} alt="Logo" />
                </Navbar.Brand>
            </div>
            <div className="container-fluid">
                <div className="nav-buttons d-flex justify-content-end w-100 fs-4">
                    <button onClick={() => navigate("/Home")} className="btn text-black">Home</button>
                    <button className="btn text-black text-decoration-none" onClick={() => scrollTo(refs.aboutRef)}>About Me</button>
                    <button className="btn text-black text-decoration-none" onClick={() => scrollTo(refs.projectsRef)}>Projects</button>
                    <button className="btn text-black text-decoration-none" onClick={() => scrollTo(refs.skillsRef)}>Skills</button>
                    <button className="btn text-black text-decoration-none" onClick={() => scrollTo(refs.certificateRef)}>Certificates</button>
                    <button className="btn text-black text-decoration-none" onClick={() => scrollTo(refs.contactRef)}>Connect</button>
                </div>
            </div>
        </Navbar>
    </>);
}

export default NavBar;
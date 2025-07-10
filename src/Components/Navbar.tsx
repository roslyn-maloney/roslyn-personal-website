import Logo from "../Assets/Logo.svg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
    return (<>
        <Navbar className="shadow" fixed="top">
            <div>
                <Navbar.Brand href="/Home" className="m-0">
                    <Image className="logo" src={Logo} alt="Logo" />
                </Navbar.Brand>
            </div>
            <div className="container-fluid">
                <div className="nav-links d-flex justify-content-end w-100">
                    <Link to="/Home" className="text-black text-decoration-none">Home</Link>
                    <Link to="/AboutMe" className="text-black text-decoration-none ms-5">About Me</Link>
                    <Link to="/Projets" className="text-black text-decoration-none ms-5">Projects</Link>
                    <Link to="/Skills" className="text-black text-decoration-none ms-5">Skills</Link>
                    <Link to="/Certificates" className="text-black text-decoration-none ms-5">Certificated</Link>
                    <Link to="/Connect" className="text-black text-decoration-none ms-5">Connect</Link>
                </div>
            </div>
        </Navbar>
    </>);
}

export default NavBar;
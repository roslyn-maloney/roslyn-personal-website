import Banner from "../../Assets/Banner.svg";
// import DownCaret from "../../Assets/DownCaret.svg";
import { Image } from "react-bootstrap";

function Hero() {
    return (
        <div className="hero">
            <Image className="d-flex justify-content-center hero-img" src={Banner} alt="Banner" />
            <div className="hero-intro">
                <p style={{ fontSize: '40px', marginBottom: '10px' }}>Hello! I am ...</p>
                <h1 style={{ fontSize: '100px', marginBottom: '10px' }}>Roslyn Maloney</h1>
                <h3 style={{ fontSize: '40px' }}>A UX Designer & Web Developer</h3>
            </div>
        </div>
    );
} export default Hero;
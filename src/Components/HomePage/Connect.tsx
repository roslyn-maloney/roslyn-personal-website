import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import DividerFour from "../../Assets/Divider4.svg";
import ConnectBackground from "../../Assets/Connect.svg";

function Connect() {
    return (
        <div>
            <Image className="divider-four" src={DividerFour} alt="Divider-Four" />
            <div className="connect-section">
                <Image className="connect-background" src={ConnectBackground} alt="Connect-Background" />
                <div className="connect-content">
                    <h3>Questions? Wanna Connect</h3>
                    <p className="Email">Email: maloney.r@northeastern.edu</p>
                    <p className="Number"> Phone Number: (781)-686-6482</p>
                    <Link className="LinkedIn" to={"https://www.linkedin.com/in/roslyn-maloney-nustudent/"}> LinkedIn: Roslyn Maloney</Link><br />
                    <p className="Instagram">Instagram: Roselily1604</p>
                    <Link className="Github" to={"https://github.com/roslyn-maloney"}>Github: Roslyn-Maloney</Link>
                </div>
            </div>
        </div>
    );
}
export default Connect;

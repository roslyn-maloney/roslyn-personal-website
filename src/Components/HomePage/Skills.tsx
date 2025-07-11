import DividerTwo from "../../Assets/Divider2.svg";
import { Image } from "react-bootstrap";
import Five from "../../Assets/5 Star.svg";
import Four from "../../Assets/4 Star.svg";
import Three from "../../Assets/3 Star.svg"

function Skills() {
    return (
        <div>
            <Image className="divider-two" src={DividerTwo} alt="Divider-Two" />
            <h2 className="d-flex justify-content-center skill-title">Skills</h2>
            <div className="d-flex justify-content-center flex-row skills-row">
                <div className="d-flex flex-column">
                    <h3>Languages</h3>
                    <ul>
                        <li>HTML : <Image className="5Star" src={Five} alt="Five" /></li>
                        <li>CSS : <Image className="5Star" src={Five} alt="Five" /></li>
                        <li>Java : <Image className="4Star" src={Four} alt="Four" /></li>
                        <li>Python : <Image className="3Star" src={Three} alt="Three" /></li>
                        <li>Typescript : <Image className="3Star" src={Three} alt="Three" /></li>
                        <li>Javascript : <Image className="4Star" src={Four} alt="Four" /></li>
                    </ul>
                </div>
                <div className="d-flex flex-column">
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React : <Image className="4Star" src={Four} alt="Four" /></li>
                        <li>Bootstrap : <Image className="3Star" src={Three} alt="Three" /></li>
                        <li>Node JS : <Image className="3Star" src={Three} alt="Three" /></li>
                    </ul>
                </div>
                <div className="d-flex flex-column">
                    <h3>Software</h3>
                    <ul>
                        <li>Github : <Image className="4Star" src={Four} alt="Four" /></li>
                        <li>Visual Studio : <Image className="4Star" src={Four} alt="Four" /></li>
                        <li>Jupter Notebook : <Image className="3Star" src={Three} alt="Three" /></li>
                        <li>Linux : <Image className="3Star" src={Three} alt="Three" /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
import DividerTwo from "../../Assets/Divider2.svg";
import { Image } from "react-bootstrap";

function Skills() {
    return (
        <div>
            <Image className="divider-two" src={DividerTwo} alt="Divider-Two" />
            <h2 className="d-flex justify-content-center skills-title">Skills</h2>
            <div className="d-flex justify-content-center flex-row skills-row">
                <div className="d-flex flex-column">
                    <h3>Languages</h3>
                    <ul>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ul>
                </div>
                <div className="d-flex flex-column">
                    <h3>Frameworks</h3>
                    <ul>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ul>
                </div>
                <div className="d-flex flex-column">
                    <h3>Software</h3>
                    <ul>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
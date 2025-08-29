import ProjectBanner from "../../Assets/ProjectBanner.svg";
import * as db from "../../Data";
import { Button, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavBar from "../Navbar";
import Connect from "../HomePage/Connect";
import { RefObject, useRef } from "react";



function ProjectPage() {

    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const certificateRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      };

    const projects = db.projects;
    const { pid } = useParams();
    const project = projects.find(p => p._id === pid);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <NavBar scrollTo={scrollTo} refs={{ aboutRef, projectsRef, skillsRef, certificateRef, contactRef }}/> <br/><br/><br/><br/><br/>
            <div className="project-banner-wrapper position-relative text-center">
                <Image className="project-banner" src={ProjectBanner} alt="project-banner" />
                <h1 className="project-name position-absolute top-50 start-50 translate-middle">
                    {project.name}
                </h1>
            </div>

            <div className="d-flex align-items-start project-container">
                <Image className="project-image img-fluid shadow rounded" src={project.image} alt="project-img" />

                <div className="project-text text-start">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-break">
                            <strong>Language:</strong> {project.language}
                        </li>
                        <li className="list-group-item text-break">
                            <strong>Framework:</strong> {project.framework}
                        </li>
                        <li className="list-group-item text-break">
                            <strong>Figma Link:</strong>{' '}
                            <a href={project.figma} target="_blank" rel="noopener noreferrer">
                                {project.figma}
                            </a>
                        </li>
                        <li className="list-group-item text-break">
                            <strong>Github Link:</strong>{' '}
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                {project.github}
                            </a>
                        </li>
                        <li className="list-group-item text-break">
                            <strong>Description:</strong> {project.description}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="accordion" id="projectAccordion">
                <div className="project-btn btn-lg d-flex justify-content-center">
                    {/* PROBLEM Button */}
                    <Button
                        className="problem-btn"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseProblem"
                        aria-expanded="false"
                        aria-controls="collapseProblem"
                    >
                        PROBLEM
                    </Button>

                    {/* KEY FEATURES Button */}
                    <Button
                        className="problem-btn"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFeatures"
                        aria-expanded="false"
                        aria-controls="collapseFeatures"
                    >
                        KEY FEATURES
                    </Button>

                    {/* CHALLENGES Button */}
                    <Button
                        className="problem-btn"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseChallenges"
                        aria-expanded="false"
                        aria-controls="collapseChallenges"
                    >
                        CHALLENGES
                    </Button>

                    {/* DEVELOPMENT Button */}
                    <Button
                        className="problem-btn"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseDevelopment"
                        aria-expanded="false"
                        aria-controls="collapseDevelopment"
                    >
                        DEVELOPMENT PROGRESS
                    </Button>
                </div>

                {/* PROBLEM Collapse */}
                <div className="collapse-wrapper position-relative">
                    <div
                        id="collapseProblem"
                        className="accordion-collapse collapse project-collapse"
                        data-bs-parent="#projectAccordion"
                    >
                        <div className="card card-body">
                            <p className="collapse-title">Problem</p>
                            <hr />
                            <p className="collapse-text">{project.problem}</p>
                        </div>
                    </div>
                </div>

                {/* Features Collapse */}
                <div className="collapse-wrapper position-relative">
                    <div
                        id="collapseFeatures"
                        className="accordion-collapse collapse project-collapse"
                        data-bs-parent="#projectAccordion"
                    >
                        <div className="card card-body">
                            <p className="collapse-title">Key Features</p>
                            <hr />
                            <p className="collapse-text">{project.key_features}</p>
                        </div>
                    </div>
                </div>

                {/* Challenge Collapse */}
                <div className="collapse-wrapper position-relative">
                    <div
                        id="collapseChallenges"
                        className="accordion-collapse collapse project-collapse"
                        data-bs-parent="#projectAccordion"
                    >
                        <div className="card card-body">
                            <p className="collapse-title">Challenges</p>
                            <hr />
                            <p className="collapse-text">{project.challenges}</p>
                        </div>
                    </div>
                </div>


                {/* Development Progress Collapse */}
                <div className="collapse-wrapper position-relative">
                    <div
                        id="collapseDevelopment"
                        className="accordion-collapse collapse project-collapse"
                        data-bs-parent="#projectAccordion"
                    >
                        <div className="card card-body">
                            <p className="collapse-title">Development Progress</p>
                            <hr />
                            <p className="collapse-text">{project.development}</p>
                        </div>
                    </div>
                </div>
                <Connect/>
            </div>
        </div >
    );
}

export default ProjectPage;

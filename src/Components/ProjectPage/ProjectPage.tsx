import * as db from "../../Data";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import React, { useRef, RefObject } from "react";


function ProjectPage() {
    const projects = db.projects;
    const { pid } = useParams();
    return (
        <div>
            {/* {projects.filter((p: any) => p.id === pid)
                .map((p: any) => ( */}
                    <div>
                        <h1>Name</h1>
                        <Image className="project-image" src="" alt="project-img" />
                        <div className="project-text">
                            <h4>Something</h4>
                            <h4>Something</h4>
                            <h4>Something</h4>
                            <h4>Something</h4>
                        </div>
                    </div>
                {/* ))} */}
        </div>
    );
}

export default ProjectPage;

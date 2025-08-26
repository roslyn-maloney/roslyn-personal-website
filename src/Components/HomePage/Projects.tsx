// import DividerOne from "../../Assets/Divider1.svg";
// import { Image, Button } from "react-bootstrap";

// function Projects() {
//     return (
//         <div>
//             <Image className="divider-one" src={DividerOne} alt="DividerOne" />
//             <h2 className="d-flex justify-content-center project-title">Projects</h2>
//             <div className=" d-flex justify-content-center flex-row project-cards">
//                 <Button className="Medvualt">MedVault</Button>
//                 <Button className="Cornish+">CornishCommons+</Button>
//                 <Button className="Eventura">Eventura</Button>
//             </div>
//         </div>
//     )
// }
// export default Projects;


import React, { forwardRef } from "react";
import DividerOne from "../../Assets/Divider1.svg";
import { Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const nav = useNavigate();
  return (
    <div ref={ref}>
      <Image className="divider-one" src={DividerOne} alt="DividerOne" />
      <h2 className="d-flex justify-content-center project-title">Projects</h2>
      <div className="d-flex justify-content-center flex-row project-cards">
        <Button onClick={() => nav("/Medvault")} className="Medvualt">MedVault</Button>
        <Button onClick={() => nav("/Cornish")} className="Cornish+">CornishCommons+</Button>
        <Button onClick={() => nav("/Eventura")} className="Eventura">Eventura</Button>
      </div>
    </div>
  );
});

export default Projects;

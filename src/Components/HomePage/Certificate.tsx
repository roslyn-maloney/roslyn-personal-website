// import DividerThree from "../../Assets/Divider3.svg";
// import { Image } from "react-bootstrap";
// function Certificate(){
//     return(
//         <div>
//             <Image className="divider-three" src={DividerThree} alt="Divider-Three" />
//             <h2 className="d-flex justify-content-center certificate-title">Certificates</h2>
//             <p className="d-flex justify-content-center certificate-message">
//                 This page is still in progress of being completed <br/>
//                 and will be updated as the school year continues
//             </p>
//         </div>
//     );
// }
// export default Certificate;


import React, { forwardRef } from "react";
import DividerThree from "../../Assets/Divider3.svg";
import { Image } from "react-bootstrap";

const Certificate = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <Image className="divider-three" src={DividerThree} alt="Divider-Three" />
      <h2 className="d-flex justify-content-center certificate-title">Certificates</h2>
      <p className="d-flex justify-content-center certificate-message">
        This page is still in progress of being completed <br />
        and will be updated as the school year continues
      </p>
    </div>
  );
});

export default Certificate;

import React from "react";
import "./PageA.css";

import Img1 from '../../public/assets/images/1.jpg';
// import Img2 from './../../../public/asesets/images/2.jpg';


function Dashboard() {
  document.title = "Page A";

  return (
    <div className="App ">
      <div  className="Img-container ">
      <img src={Img1} alt="Loading..." />
      </div>
      <div  className="Img-container ">
      <img src="/assets/images/2.jpg" alt="Loading..." />
      </div>
    </div>
  );
}

export default Dashboard;

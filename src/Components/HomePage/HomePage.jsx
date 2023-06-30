import React, { useState } from "react";
import { ImagesThumbnail } from "../../ImageData/ImageData";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  const [ImgState, setImageState] = useState();



  
  return (
    <div>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          {ImagesThumbnail.map((imgT, index) => {
            return (
              <div key={index}>
                <span>{imgT.imageT1}</span>
                <span>{imgT.imageT2}</span>
                <span>{imgT.imageT3}</span>
                <span>{imgT.imageT4}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

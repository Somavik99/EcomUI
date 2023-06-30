// import React, { useState } from "react";
import { ImagesThumbnail } from "../../ImageData/ImageData";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  // const [ImgState, setImageState] = useState([])

  let Thumbnails = [];
  for (let i = 0; i <= ImagesThumbnail.length; i++) {
    Thumbnails.push(i);
  }

  return (
    <div>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          {Thumbnails.map((imgT, index) => {
            return <div key={index}>{imgT.imageT1}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

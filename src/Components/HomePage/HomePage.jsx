import React, { useState } from "react";
import { FullImages } from "../../ImageData/ImageData";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  const [ImgState, setImageState] = useState(FullImages[0]);

  const HandleImageChange = (image) => {
    setImageState(image);
  };

  return (
    <div>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <div>
            <img src={ImgState.image} alt="" />
          </div>
          {FullImages.map((imgT, index) => {
            return (
              <div key={index}>
                <img
                  src={imgT.image}
                  alt="err"
                  style={{ height: "120px", width: "120px" }}
                  onClick={() => HandleImageChange(imgT)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

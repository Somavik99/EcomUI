import React, { useState } from "react";
import { FullImages } from "../../ImageData/ImageData";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  const [ImgState, setImageState] = useState(FullImages[0]);

  let HandleImageChange = (images) => {
    setTimeout(() => {
      setImageState(images);
    }, 500);
  };

  return (
    <div>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <div>
            <img
              src={ImgState.image}
              alt=""
              style={{ height: "500px", width: "500px" }}
            />
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

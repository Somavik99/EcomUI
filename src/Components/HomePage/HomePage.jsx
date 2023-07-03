import React, { useState } from "react";
import {  ProductDescription } from "../../ImageData/ImageData";
import NavBar from "../NavBar/NavBar";
import AddItems from "../DetailsADD/AddItems";

const HomePage = () => {
  const [ImgState, setImageState] = useState(ProductDescription[0]);

  let HandleImageChange = (images) => {
    setTimeout(() => {
      setImageState(images);
    }, 200);
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
              src={ImgState.FullImages.image}
              alt=""
              style={{ height: "485px", width: "485px" }}
            />
          </div>
          {ProductDescription.map((imgT, index) => {
            return (
              <div key={index}>
                <img
                  src={imgT.FullImages.image}
                  alt="err"
                  style={{ height: "120px", width: "120px" }}
                  onClick={() => HandleImageChange(imgT)}
                />
              </div>
            );
          })}
        </div>
        <div>
          <AddItems/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

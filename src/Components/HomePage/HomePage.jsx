import React, { useState } from "react";
import { FullImages } from "../../ImageData/ImageData";
import NavBar from "../NavBar/NavBar";
import AddItems from "../DetailsADD/AddItems";
import "./HomePage.css"

const HomePage = () => {
  const [ImgState, setImageState] = useState(FullImages[0]);

  let HandleImageChange = (images) => {
    setTimeout(() => {
      setImageState(images);
    }, 200);
  };

  return (
    <>
       <div>
          <NavBar />
        </div>
    <div className="Home">
    
      <div className="Home__cont">
        <div>
          <div className="FullImage">
            <img
              src={ImgState.image}
              alt="Sneakers"
              style={{ height: "485px", width: "485px" }}
              className="fImg"
            />
          </div> 
          <div className="Img__cont" >
          {FullImages.map((imgT, index) => {
            return (
              <div key={index} >
                <img
                className="tImg"
                  src={imgT.image}
                  alt="err"
                  style={{ height: "100px", width: "100px" }}
                  onClick={() => HandleImageChange(imgT)}
                />
              </div>
            );
          })}
          </div>
        </div>
        <div className="Add__cont">
          <AddItems/>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;

import React, { useState } from "react";
import { FullImages } from "../../ImageData/ImageData";
import NavBar from "../NavBar/NavBar";
import AddItems from "../DetailsADD/AddItems";
import { motion } from "framer-motion";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "./HomePage.css";

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [ImgState, setImageState] = useState(FullImages[current]);

  let HandleImageChange = (images) => {
    setTimeout(() => {
      setImageState(images);
    }, 200);
  };

  return (
    <>
      <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <NavBar />
      </div>
      <div className="Home">
        <div className="Home__cont">
          <div>
            <motion.div className="FullImage">
              <img
                src={ImgState.image}
                alt="Sneakers"
                style={{ height: "485px", width: "485px" }}
                className="fImg"
              />
            </motion.div>
            <div className="Img__cont">
              <button>
                <AiOutlineLeft />
              </button>
              {FullImages.map((imgT, index) => {
                return (
                  <div key={index} className="tImg">
                    <img
                      src={imgT.image}
                      alt="err"
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "20px",
                      }}
                      onClick={() => HandleImageChange(imgT)}
                    />
                  </div>
                );
              })}
              <button>
                <AiOutlineRight />
              </button>
            </div>
          </div>
          <div className="Add__cont">
            <AddItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

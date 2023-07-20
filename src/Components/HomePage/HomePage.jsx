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

  let length = FullImages.length;

  if (!Array.isArray(FullImages) || length <= 0) {
    return null;
  }

  const HomeStyle = {
    innerWidth: "1500px",
  };

  const NextButton = (next) => {
    setCurrent(next === length - 1 ? 0 : next + 1);
  };

  const PrevButton = (prev) => {
    setCurrent(prev === 0 ? length - 1 : prev - 1);
  };

  console.log(current);

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
            {
              <div className={HomeStyle ? "Img__cont  active" : "Img__cont"}>
                <span>
                <button
                  onClick={() => PrevButton(current)}
                  className="Previous"
                >
                  <AiOutlineLeft />
                </button>
                </span>
                {FullImages.map((imgT, index) => {
                  return (
                <div
                      key={index}
                      className={index === current ? "tImg  active" : "tmg"}
                    >
                     
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
                <span className="Next">
                <button onClick={() => NextButton(current)} >
                  <AiOutlineRight />
                </button>
                </span>
              </div>
            }
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

import Shoe1thumbnail from "../Assets/images/Shoe1thumbnail.jpg";
import Shoe2thumbnail from "../Assets/images/Shoe2thumbnail.jpg";
import Shoe3thumbnail from "../Assets/images/Shoe3thumbnail.jpg";
import Shoe4thumbnail from "../Assets/images/Shoe4thumbnail.jpg";
import Shoe1 from "../Assets/images/Shoe1.jpg";
import Shoe2 from "../Assets/images/Shoe2.jpg";
import Shoe3 from "../Assets/images/Shoe3.jpg";
import Shoe4 from "../Assets/images/Shoe4.jpg";

const ImagesThumbnail = [
  { id: 1, imageT1: <img src={Shoe1thumbnail} alt="Err" /> },
  { id: 2, imageT2: <img src={Shoe2thumbnail} alt="Err" /> },
  { id: 3, imageT3: <img src={Shoe3thumbnail} alt="Err" /> },
  { id: 4, imageT4: <img src={Shoe4thumbnail} alt="Err" /> },
];

const FullImages = [
  { id: 1, image1: <img src={Shoe1} alt="ImgErr" /> },
  { id: 2, image2: <img src={Shoe2} alt="ImgErr" /> },
  { id: 3, image3: <img src={Shoe3} alt="ImgErr" /> },
  { id: 4, image4: <img src={Shoe4} alt="ImgErr" /> },
];
export { ImagesThumbnail, FullImages };

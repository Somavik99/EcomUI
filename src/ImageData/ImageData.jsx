import Shoe1thumbnail from "../Assets/images/Shoe1thumbnail.jpg";
import Shoe2thumbnail from "../Assets/images/Shoe2thumbnail.jpg";
import Shoe3thumbnail from "../Assets/images/Shoe3thumbnail.jpg";
import Shoe4thumbnail from "../Assets/images/Shoe4thumbnail.jpg";
import Shoe1 from "../Assets/images/Shoe1.jpg";
import Shoe2 from "../Assets/images/Shoe2.jpg";
import Shoe3 from "../Assets/images/Shoe3.jpg";
import Shoe4 from "../Assets/images/Shoe4.jpg";

const ImagesThumbnail = [
  { id: 1, imageT: <img src={Shoe1thumbnail} alt="Err" /> },
  { id: 2, imageT: <img src={Shoe2thumbnail} alt="Err" /> },
  { id: 3, imageT: <img src={Shoe3thumbnail} alt="Err" /> },
  { id: 4, imageT: <img src={Shoe4thumbnail} alt="Err" /> },
];

const FullImages = [
  { id: 1, image: Shoe1 },
  { id: 2, image: Shoe2 },
  { id: 3, image: Shoe3 },
  { id: 4, image: Shoe4 },
];

const ProductDescription = [
  {
    id:Date.now(),
    title: "SNEAKER COMPANY",
    company: "Fall Limited Edition Sneakers",
    details:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    retailPrice: "$125.00",
    off: "50%",
    original: "$250",
   image:Shoe1
  },
];

export { ImagesThumbnail, FullImages, ProductDescription };

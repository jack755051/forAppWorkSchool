import "./header.css";
import image from "../assets/Someday, Alena Aenami.jpeg";

export default function Header() {
  //   const background = require("../assets/IMG_3942.jpeg");
  return (
    <>
      <div className="container">
        <img src={image} className="image" />
      </div>
    </>
  );
}

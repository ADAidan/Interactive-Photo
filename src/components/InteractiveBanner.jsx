import banner from "../public/images/banner.jpg";
import Button from "./Button";
import "./InteractiveBanner.css";

const products = [
  { top: "12%", left: "28%", text: "Buy Paintings" },
  { top: "32%", left: "23%", text: "Buy Stereo" },
  { top: "25%", left: "65%", text: "Buy Lamp" },
  { top: "45%", left: "55%", text: "Buy Storage" },
  { top: "65%", left: "10%", text: "Buy Plant" },
  { top: "58%", left: "31%", text: "Buy Vase" },
  { top: "50%", left: "80%", text: "Buy Chair" },
  { top: "90%", left: "38%", text: "Buy Table" },
];

const InteractiveBanner = () => {
  return (
    <div className="banner-container">
      <img src={banner} alt="banner" className="banner-image" />
      {products.map((product, index) => (
        <Button key={index} product={product} />
      ))}
    </div>
  );
};

export default InteractiveBanner;

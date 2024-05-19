import amazon from "../../public/images/amazon.png";
import flipkart from "../../public/images/flipkart.png";
import shoe_image from "../../public/images/shoe_image.png";
const Body = () => {
  return (
    <div className="body container">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btn">
          <button className="shop-btn">Shop Now</button>
          <button classNage="category-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also available on</p>
          <div className="site-icon">
            <img src={flipkart} alt="flipkart-icon"></img>
            <img src={amazon} alt="amazon-icon"></img>
          </div>
        </div>
      </div>

      <div className="image">
        <img src={shoe_image} alt="shoe image"></img>
      </div>
    </div>
  );
};

export default Body;

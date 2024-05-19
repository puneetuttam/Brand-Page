import brand_logo from "../../public/images/brand_logo.png"

const Header = () => {
  return (
    <div className="nav container">
      <div className="logo">
        <img src={brand_logo} alt="logo"></img>
      </div>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="login">Login</button>
    </div>
  );
};

export default Header;

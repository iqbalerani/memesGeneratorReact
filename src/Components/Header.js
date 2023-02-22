import logo from "./memelogo.png";

function Header() {
  return (
    <div>
      <nav className="nav">
        <img src={logo} />
        <h4 className="header--text">React Course - Project 3</h4>
      </nav>
    </div>
  );
}

export default Header;

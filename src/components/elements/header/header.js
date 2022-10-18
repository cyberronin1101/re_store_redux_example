import "./header.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ numItems, total = 0 }) => {
  return (
    <header className={"header"}>
      <Link to={"/"} className={"logo text-dark"}>
        ReStore
      </Link>
      <Link to={"/cart"} className={"header__cart"}>
        <span className={"header__cartIcon fa fa-shopping-cart"}></span>
        {numItems} items - {total.toLocaleString("ru-RU")} ₽
      </Link>
    </header>
  );
};

export default connect()(Header);

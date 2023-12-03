import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs p-5">
      <Link
        to="/project/home"
        className={`nav-link ${pathname.includes("home") ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/project/search"
        className={`nav-link ${pathname.includes("search") ? "active" : ""}`}
      >
       Search
      </Link>
      <Link
        to="/project/signin"
        className={`nav-link ${pathname.includes("signin") ? "active" : ""}`}
      >
       Signin
      </Link>
      <Link
        to="/project/signup"
        className={`nav-link ${pathname.includes("signup") ? "active" : ""}`}
      >
        Signup
      </Link>
      <Link
        to="/project/account"
        className={`nav-link ${pathname.includes("account") ? "active" : ""}`}
      >
        Account
      </Link>
    </nav>
  );
}
export default Nav;

import { NavLink } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import { StyledHeader } from "./styled/Header.styled";
import { StyledSpan } from "./styled/Span.styled";



export default function Navbar() {
  const { handleTheme, themeName } = useContext(SiteContext);


  return (
   <StyledHeader>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CatApi Project
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-1">
            <NavLink className="nav-link" aria-current="page" to="/">
              Ana Sayfa
            </NavLink>
            <NavLink className="nav-link" to="/fetch-categories">
              Fetch: Kategoriler
            </NavLink>
            <NavLink className="nav-link" to="/axios-categories">
              Axios: Kategoriler
            </NavLink>
            <NavLink className="nav-link" to="/rtk-query-categories">
              RTK Q: Kategoriler
            </NavLink>
            <StyledSpan onClick={handleTheme} className="nav-link">
              {themeName === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
            </StyledSpan>
          </div>
        </div>
      </div>
    </nav>
    </StyledHeader>
  );
}
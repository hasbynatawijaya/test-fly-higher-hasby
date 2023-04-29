import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledNav = styled("div")(() => ({
  overflowX: "auto",
}));

const StyledLInk = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ isActive }) => ({
  fontSize: 18,
  fontWeight: 600,
  textDecoration: "none",
  "&:not(:last-child)": {
    marginRight: 16,
  },
  borderBottom: isActive ? "2px solid #ffffff" : "none",
  color: "#ffffff",
}));

interface NavMenu {
  label: string;
  url: string;
}

interface Props {
  menu: NavMenu[];
}

const Nav: React.FC<Props> = ({ menu }) => {
  const location = useLocation();

  return (
    <StyledNav>
      {menu.map((m, i) => (
        <StyledLInk key={i} to={m.url} isActive={m.url === location.pathname}>
          {m.label}
        </StyledLInk>
      ))}
    </StyledNav>
  );
};

export default Nav;

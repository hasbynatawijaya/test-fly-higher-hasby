import { Link as ReactRouterLink, LinkProps } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledLink = styled(ReactRouterLink)({
  color: "#48dac5",
  textDecoration: "none",
});

const Link: React.FC<LinkProps> = ({ ...props }) => {
  return <StyledLink {...props} />;
};

export default Link;

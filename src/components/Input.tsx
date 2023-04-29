import { OutlinedInput, OutlinedInputProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props {
  variant: "dark" | "light";
}

const StyledInput = styled(OutlinedInput, {
  shouldForwardProp: (prop) => prop !== "variant",
})<Props>(({ variant }) => ({
  "&.MuiInputBase-root.MuiOutlinedInput-root": {
    color: "#5f5f5f",
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: variant === "dark" ? "#090909" : "#ffffff",
    borderRadius: variant === "dark" ? 20 : 8,
    border: "0px",

    "& svg": {
      color: variant === "dark" ? "#ffffff" : "grey",
    },
  },
}));

const Input: React.FC<Props & OutlinedInputProps> = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;

import { useState } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";

import Link from "@/components/Link";
import Input from "@/components/Input";

const SignIn = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div>
      {!isMdDown ? (
        <Typography variant="body1" color="white" fontWeight={600}>
          Or Signin with
        </Typography>
      ) : (
        <></>
      )}

      <Input
        fullWidth
        color="secondary"
        placeholder="Test@gmail.com"
        sx={{
          marginBottom: 2,
          marginTop: 4,
        }}
        variant={isMdDown ? "light" : "dark"}
      />
      <Input
        fullWidth
        color="secondary"
        placeholder="********"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        }
        variant={isMdDown ? "light" : "dark"}
      />
      <Button variant="contained" color="primary" fullWidth sx={{ my: 4 }}>
        Sign in Account
      </Button>
      {!isMdDown ? (
        <Typography
          variant="body1"
          color="white"
          fontWeight={600}
          textAlign="center"
        >
          Create an account? <Link to="/auth/signup">Sign Up</Link>
        </Typography>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SignIn;

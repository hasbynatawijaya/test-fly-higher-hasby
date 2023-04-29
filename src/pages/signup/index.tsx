import { useState } from "react";
import {
  Button,
  Grid,
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

const Signup = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div>
      {!isMdDown ? (
        <Typography variant="body1" color="white" fontWeight={600}>
          Or Signup with
        </Typography>
      ) : (
        <></>
      )}

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <Input
            fullWidth
            color="secondary"
            placeholder="First name"
            variant={isMdDown ? "light" : "dark"}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            fullWidth
            color="secondary"
            placeholder="Last name"
            variant={isMdDown ? "light" : "dark"}
          />
        </Grid>
      </Grid>

      <Input
        fullWidth
        color="secondary"
        placeholder="Test@gmail.com"
        sx={{
          marginBottom: 2,
          marginTop: 2,
        }}
        variant={isMdDown ? "light" : "dark"}
      />
      <Input
        fullWidth
        color="secondary"
        placeholder="Password"
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
        sx={{
          marginBottom: 2,
        }}
      />
      <Input
        fullWidth
        color="secondary"
        placeholder="Confirm Password"
        type={showConfirmPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowConfirmPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        }
        variant={isMdDown ? "light" : "dark"}
      />
      <Button variant="contained" color="primary" fullWidth sx={{ my: 4 }}>
        Create Account
      </Button>

      {!isMdDown ? (
        <Typography
          variant="body1"
          color="white"
          fontWeight={600}
          textAlign="center"
        >
          Already have an account? <Link to="/auth/signin">Sign in</Link>
        </Typography>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Signup;

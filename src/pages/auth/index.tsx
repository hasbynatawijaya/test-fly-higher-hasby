import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Hidden,
  IconButton,
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Close as CloseIcon,
  Google as GoogleIcon,
  Apple as AppleIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";

import HeroSlideshow from "@/components/HeroSlideshow";

import logo from "@/assets/logo.png";
import Nav from "@/components/Nav";

import hero4 from "@/assets/hero-4.png";

const Root = styled("div")(() => ({
  height: "100vh",
  overflow: "hidden",
  "& .MuiGrid-root": {
    height: "100%",
  },
}));

const FormContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMdDown",
})<{ isMdDown: boolean }>(({ isMdDown }) => ({
  position: "relative",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: isMdDown ? "auto" : "hidden",
  backgroundColor: "#000000",
}));

const FormWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMdDown",
})<{ isMdDown: boolean }>(({ isMdDown }) => ({
  backgroundColor: "transparent",
  position: "relative",
  width: "100%",
  height: "100%",
  maxWidth: 450,
  overflow: isMdDown ? "auto" : "hidden",
}));

const CloseButtonContainer = styled("div")(() => ({
  position: "absolute",
  top: 8,
  right: 8,
  "& svg": {
    color: "#fff",
  },
}));

const SocialContainer = styled("div")(() => ({
  padding: 4,
  backgroundColor: "#000000",
  borderRadius: "50%",
  width: 42,
  height: 42,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  "& svg": {
    color: "#ffffff",
  },
}));

const Auth = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Root>
      <Grid container>
        <Hidden mdDown>
          <Grid item md={8}>
            <HeroSlideshow />
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={12} md={4}>
          <FormContainer
            isMdDown
            sx={{
              backgroundImage: isMdDown ? `url(${hero4})` : "unset",
              padding: isMdDown ? "30px" : "60px",
            }}
          >
            <CloseButtonContainer>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </CloseButtonContainer>

            <FormWrapper isMdDown>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <img src={logo} alt="logo" width={100} height={100} />
                <Typography
                  component="p"
                  variant="h6"
                  color="white"
                  fontWeight={600}
                >
                  Higher
                </Typography>
              </Box>

              {!isMdDown ? (
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<GoogleIcon />}
                  sx={{ my: 4 }}
                >
                  Continue With Google
                </Button>
              ) : (
                <></>
              )}
              {isMdDown ? (
                <Box my={4} display="flex" justifyContent="center" width="100%">
                  <Nav
                    menu={[
                      { label: "Sign In", url: "/auth/signin" },
                      { label: "Sign Up", url: "/auth/signup" },
                    ]}
                  />
                </Box>
              ) : (
                <></>
              )}
              <Outlet />
              {isMdDown ? (
                <>
                  <Box mb={2}>
                    <Typography
                      variant="body1"
                      color="#fff"
                      fontWeight={600}
                      textAlign="center"
                    >
                      Or use a social account to create account
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center" columnGap={4}>
                    <SocialContainer>
                      <GoogleIcon />
                    </SocialContainer>

                    <SocialContainer>
                      <AppleIcon />
                    </SocialContainer>

                    <SocialContainer>
                      <FacebookIcon />
                    </SocialContainer>
                  </Box>
                </>
              ) : (
                <></>
              )}
            </FormWrapper>
          </FormContainer>
        </Grid>
      </Grid>
    </Root>
  );
};

export default Auth;

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Alert,
  AlertTitle,
  Button,
  Grid,
  Link,
  Snackbar,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signInPostType,
  useSignInMutation,
} from "../../state/api/authApiSlice";
import {
  setUserAuthDetails,
  userAuthType,
} from "../../state/authUserDetailsSlice/authUserDetailsSlice";
import { AppDispatch } from "../../state/store";
const defaultTheme = createTheme();

export default function SignIn() {
  const [signInRedux, { status }] = useSignInMutation();
  const navigate = useNavigate();
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSnackbar, setSnackBarState] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    setSnackBarState(false);
  };

  function handleSubmit() {
    let data: signInPostType = { email: email, password: password };
    signInRedux(data)
      .unwrap()
      .then((fullfilled) => {
        console.log(fullfilled.token);

        let authDetail: userAuthType = {
          email: email,
          token: fullfilled.token,
        };
        dispatch(setUserAuthDetails(authDetail));
        localStorage.setItem("authDetails", JSON.stringify(authDetail));

        navigate("/", { replace: true });
      })
      .catch((rejected) => {
        console.log(rejected);
        setSnackBarState(true);
      });
  }

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline></CssBaseline>

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary-main" }}>
              <LockOutlinedIcon></LockOutlinedIcon>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(event) => {
                  setUserEmail(event.target.value);
                }}
              ></TextField>

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              ></TextField>

              <Button
                disableRipple
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => handleSubmit()}
              >
                Sign in
              </Button>
            </Box>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Link
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                  variant="body2"
                >
                  {"Dont have a account? Sign up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          {showSnackbar ? (
            <Snackbar
              sx={{ width: "22rem" }}
              open={true}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                sx={{ width: "22rem" }}
                severity="error"
                variant="filled"
              >
                {" "}
                <AlertTitle>Error</AlertTitle>
                <strong>Bad Credentials </strong>
              </Alert>
            </Snackbar>
          ) : (
            <></>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
}

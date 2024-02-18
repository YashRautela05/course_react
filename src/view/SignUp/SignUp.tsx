import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signUpPostType,
  useSignUpMutation,
} from "../../state/api/authApiSlice";

export default function SignUp() {
  const defaultTheme = createTheme();
  const navigate = useNavigate();

  const [signUp, { isLoading, isError, error }] = useSignUpMutation();
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();

  const [showUserCreatedSnackBar, setShowUserSnackBar] = useState(false);
  const [showErrorOccuredWhenCreatingUserSnackBar, setShowUserErrorSnackBar] =
    useState(false);

  const handleUserCreatedClose = () => {
    setShowUserSnackBar(false);
  };

  const handleUserErrorClose = () => {
    setShowUserErrorSnackBar(false);
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const username = usernameRef.current!.value;

    const password = passwordRef.current!.value;
    const email = emailRef.current!.value;
    const firstName = firstNameRef.current!.value;
    const lastName = lastNameRef.current!.value;

    let data: signUpPostType = {
      userName: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
    };

    signUp(data)
      .unwrap()
      .then((fullfilled: any) => {
        console.log("ello" + fullfilled);
        setShowUserSnackBar(true);
      })
      .catch((rejected) => {
        console.log(rejected);
        setShowUserErrorSnackBar(true);
      });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputRef={firstNameRef}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputRef={lastNameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="text"
                  autoComplete="text"
                  inputRef={usernameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={passwordRef}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link onClick={() => navigate("/sign-in")} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {showUserCreatedSnackBar ? (
        <Snackbar
          sx={{ width: "22rem" }}
          open={true}
          autoHideDuration={6000}
          onClose={handleUserCreatedClose}
        >
          <Alert
            onClose={handleUserCreatedClose}
            sx={{ width: "22rem" }}
            severity="success"
            variant="filled"
          >
            <AlertTitle>User Created</AlertTitle>
            <strong>User has been Succesfully created</strong>
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
      {/* {showErrorOccuredWhenCreatingUserSnackBar ? (
        <Snackbar
          sx={{ width: "22rem" }}
          open={true}
          autoHideDuration={6000}
          onClose={handleUserErrorClose}
        >
          <Alert
            onClose={handleUserErrorClose}
            sx={{ width: "22rem" }}
            severity="error"
            variant="filled"
          >
            <AlertTitle>Error</AlertTitle>
            <strong>Some error Occured</strong>
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )} */}
    </ThemeProvider>
  );
}

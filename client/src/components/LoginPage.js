import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "../images/login.jpg";
import CardMedia from "@mui/material/CardMedia";
import { getAkun } from "../axios/AkunAxios";
import { useState, useEffect } from "react";
import { addLogin } from "../axios/LoggedAxios";
import Alert from '@mui/material/Alert';
import { useNavigate, useParams } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Imtiazaki">
        Imtiazaki Darmawan
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function SignInSide  ()  {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    nomorInduk: "",
    password: "",
  });
  useEffect(() => {
    // callback untuk mengambil data  dari folder axios
    getAkun((result) => setData(result));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    data.map((akun) => {
      form.nomorInduk === akun.nomorInduk
        ? form.password === akun.password
          ? addLogin(akun)
          : setError(true)
        : setError(true);
    });
  };
  const navigation = useNavigate();
  const submitHandler = () => {
    navigation("/");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {error === true ?
            <Alert severity="error">NIM/NIP atau Password salah</Alert> :
            <div></div>
        }
                  
            <div className="banner ">
              <h1>University of Goth Girls</h1>
            </div>
            <CardMedia
              component="img"
              image={require("../images/logo.png")}
              sx={{ width: "40%", height: "40%" }}
              alt="Ujian Semester"
            />
            {/*             <Avatar sx={{ m: 1, bgcolor: "black" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography> */}
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                margin="normal"
                required
                fullWidth
                id="username"
                label="NIM / NIP"
                name="nomorInduk"
                defaultValue="Login Page is Still in Development"
                autoFocus
              />
              <TextField
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={submitHandler}
              >
                SKIP FOR NOW
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

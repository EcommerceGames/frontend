import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Background from "../../assets/images/login/background.png";
import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slide/apiRequest";
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    loginUser(data, dispatch, navigate);
    // console.log("data", data);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            bgcolor: "rgba(179, 100, 21, 0.2)",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Box component="img" src={Logo} />
          </Box>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#FFFFFF", fontSize: "28px" }}
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                marginTop: "0px",
                input: { color: "white" },
                "& label.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-error fieldset": { borderColor: "red !important" },
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                marginTop: "0px",
                input: { color: "white" },
                "& label.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-error fieldset": { borderColor: "red !important" },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: "white" }}
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: "18px" }} />
                      ) : (
                        <Visibility sx={{ fontSize: "18px" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#ff8000",
                      "&.Mui-checked": { color: "#FF8000" },
                      "&.Mui-focusVisible": { color: "#FF8000" },
                      "&:hover": { color: "#FF8000" },
                    }}
                  />
                }
                label={
                  <Typography sx={{ color: "white" }}>
                    Remember account
                  </Typography>
                }
              />
              <Typography
                sx={{
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Forgot account?
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mt: 2, bgcolor: "#ff8000" }}
            >
              Login
            </Button>
          </form>
          <Button
            fullWidth
            sx={{ mt: 2, color: "#FFFFFF" }}
            onClick={() => navigate("/signup")}
          >
            Don't have an account? Sign up
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignIn;

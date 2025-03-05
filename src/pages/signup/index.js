import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const SignUp = ({ switchToSignIn }) => {
  const [avatar, setAvatar] = useState(null);

  //   const handleAvatarChange = (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       setAvatar(URL.createObjectURL(file));
  //     }
  //   };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xs">
        <Typography variant="h4" align="center" gutterBottom>
          Đăng Ký
        </Typography>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar src={avatar} sx={{ width: 80, height: 80 }} />
        </Box>
        {/* <Button variant="outlined" component="label" fullWidth>
          Chọn ảnh đại diện
          <input type="file" hidden onChange={handleAvatarChange} />
        </Button> */}
        <TextField
          fullWidth
          label="Tên người dùng"
          margin="normal"
          variant="outlined"
        />
        <TextField fullWidth label="Email" margin="normal" variant="outlined" />
        <TextField
          fullWidth
          label="Mật khẩu"
          type="password"
          margin="normal"
          variant="outlined"
        />
        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
          Đăng ký
        </Button>
        <Button fullWidth sx={{ mt: 2 }} variant="outlined">
          Đăng ký bằng Google
        </Button>
        <Button fullWidth onClick={switchToSignIn} sx={{ mt: 2 }}>
          Đã có tài khoản? Đăng nhập
        </Button>
      </Container>
    </Box>
  );
};

export default SignUp;

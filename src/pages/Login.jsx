import React from "react";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate= useNavigate()
  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f4f7fa",
        }}
      >
        <Box className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "600px" }}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
            />
            <Button
            onClick={()=>navigate("/dashboard")}
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: "16px" }}
              type="submit"
            >
              Login
            </Button>
            <Box className="text-center mt-3">
              <Typography variant="body2" color="textSecondary">
                Don't have an account? <a href="/signup">Sign Up</a>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
   
  );
};

export default Login;

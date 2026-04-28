import {
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import api from "../../api";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });

      // Sauvegarde le token et le nom dans localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);

      navigate("/pro");
    } catch (err) {
      setError(err.response?.data?.message || "Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
      <div className="flex justify-center mb-4">
        <div className="h-1 bg-blue-600 w-16 rounded-md"></div>
      </div>
      <h2 className="text-2xl font-bold mb-4 font-ubuntu">Welcome Back!</h2>
      <h3 className="text-md mb-1 font-dm text-gray-600">
        Please enter your details to sign in
      </h3>

      {/* Message d'erreur */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-3 mb-4 text-sm">
          {error}
        </div>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-1 mt-4">
          <label className="text-sm font-semibold text-gray-700">Email</label>
        </div>
        <TextField
          fullWidth
          placeholder="yourname@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
        />

        {/* Password Field */}
        <div className="flex justify-between items-center mb-1 mt-4">
          <label className="text-sm font-semibold text-gray-700">
            Password
          </label>
          <button
            type="button"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>
        <TextField
          fullWidth
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow disabled:opacity-50"
        >
          {loading ? "Connexion..." : "Sign In"}
        </button>
      </Box>

      <div className="m-12"></div>

      <p className="text-center text-gray-600">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          className="text-blue-600 font-semibold hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Log;

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
import { ArrowBack } from "@mui/icons-material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-100-mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col">
      <div className="flex justify-center mb-4">
        <div className="h-1 bg-white w-16 rounded-md"></div>
      </div>{" "}
      <div className="bg-linear-to-br from-blue-500 to-blue-600">
        <ArrowBack
          className="cursor-pointer"
          onClick={() => navigate("/login")}
        />
        <h2 className="text-2xl font-bold mb-4 font-ubuntu">Sign Up</h2>
        <h2 className="text-2xl font-bold mb-4 font-ubuntu">Start Learning</h2>
        <h3 className="text-md mb-1 font-dm text-gray-600">
          Join thousands of students and professionals testing their knowledge.
        </h3>
      </div>
      <Box component="form" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-1 mt-4">
          <label className="text-sm font-semibold text-gray-700">
            Full Name
          </label>
        </div>
        <TextField
          fullWidth
          placeholder="Enter your full name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
          }}
        />
        {/* Email Field */}
        <div className="mb-1 mt-4">
          <label className="text-sm font-semibold text-gray-700">
            Email Address
          </label>
        </div>
        <TextField
          fullWidth
          placeholder="example@email.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
          }}
        />

        {/* Password Field */}
        <div className="flex justify-between items-center mb-1 mt-4">
          <label className="text-sm font-semibold text-gray-700">
            Password
          </label>
        </div>
        <TextField
          fullWidth
          placeholder="Create a password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
          }}
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
        {/* Password confirm */}
        <div className="flex justify-between items-center mb-1 mt-4">
          <label className="text-sm font-semibold text-gray-700">
            Confirm Password
          </label>
        </div>
        <TextField
          fullWidth
          placeholder="Re-enter password"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
          }}
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
        <p className="text-center text-gray-600 pt-6">
          I agree to the{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Terms of service
          </a>
          and{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <button
          type="submit"
          onClick={() => navigate("/home")}
          className="w-full mt-6 bg-linear-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow"
        >
          Create Account
        </button>
      </Box>
      <div className="m-12"></div>
      {/* Sign Up Link */}
      <p className="text-center text-gray-600">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 font-semibold hover:underline"
        >
          Sign In
        </button>
      </p>
    </div>
  );
};

export default SignUp;

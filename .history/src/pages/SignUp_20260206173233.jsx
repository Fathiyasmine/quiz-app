import { TextField, Box, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ArrowBack } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log({ name, email, password });
    navigate("/home");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section - Même style que HeaderLog */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-b-3xl pb-20">
        <div className="flex justify-between items-center mb-6">
          <div
            className="flex justify-center items-center bg-white/20 rounded-full w-10 h-10 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <ArrowBack />
          </div>
        </div>

        <div className="flex justify-center flex-col items-center pt-6">
          <h1 className="text-2xl font-bold mb-2 font-ubuntu">
            Start Learning
          </h1>
          <h3 className="text-md font-dm text-center">
            Join thousands of students testing their knowledge
          </h3>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
        <div className="flex justify-center mb-6">
          <div className="h-1 bg-blue-600 w-16 rounded-md"></div>
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
          <div className="mb-1 mt-4">
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

          {/* Confirm Password */}
          <div className="mb-1 mt-4">
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

          <p className="text-center text-gray-600 pt-6 text-sm">
            I agree to the{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Privacy Policy
            </a>
          </p>

          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow"
          >
            Create Account
          </button>
        </Box>

        <div className="m-8"></div>

        {/* Sign In Link */}
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
    </div>
  );
};

export default SignUp;

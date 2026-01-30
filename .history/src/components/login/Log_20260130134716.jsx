import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          onClick={() => navigate("/home")}
          className="w-full mt-6 bg-linear-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow"
        >
          Sign In
        </button>
      </Box>

      {/* OR Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <p className="text-gray-500 text-sm">OR CONTINUE WITH</p>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Google & Apple Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => navigate("/home")}
          className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
        >
          <GoogleIcon />
          Google
        </button>
        <button
          onClick={() => navigate("/home")}
          className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
        >
          Apple
        </button>
      </div>

      {/* Sign Up Link */}
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

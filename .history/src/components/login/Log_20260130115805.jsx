import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <TextField
          fullWidth
          label="yourname@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />

        <Button
          onClick={() => navigate("/home")}
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          className=" w-full bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow"
        >
          Sign in
        </Button>
      </Box>
      <div className="flex justify-center align-middle">
        <div className="border-2 bg-gray-400"></div>
        <p>OR CONTINUE WITH</p>
        <div className="border-2 bg-gray-400"></div>
      </div>
      <div>
        <div>
          <Button>Google</Button>
        </div>
        <div>
          {" "}
          <Button>Apple</Button>
        </div>
      </div>
      <p>
        Dont't have an account?
        <div>Sign up</div>
      </p>
    </div>
  );
};

export default Log;

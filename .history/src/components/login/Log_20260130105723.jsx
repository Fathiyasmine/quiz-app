import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div className="bg-white -mt-24 rounded-t-3xl p-6 pb-24 relative min-h-full shadow-md">
      <div className="flex justify-center mb-4">
        <div className="h-1 bg-blue-600 w-16 rounded-md"></div>
      </div>
      <h2 className="font-semibold text-lg mb-4 font-nunito">Welcome Back!</h2>
      <h3 className="font-semibold text-lg mb-4 font-nunito">
        Please enter your details to sign in
      </h3>
      <div></div>
    </div>
  );
};

export default Log;

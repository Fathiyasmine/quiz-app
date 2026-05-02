import { TextField, Box, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ArrowBack } from "@mui/icons-material";
import api from "../api";
import { useSettings } from "../context/SettingsContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { t, darkMode } = useSettings();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError(t("passwordMismatch"));
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);

      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || t("registerError"));
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
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
            {t("startLearning")}
          </h1>
          <h3 className="text-md font-dm text-center">{t("joinStudents")}</h3>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
        <div className="flex justify-center mb-6">
          <div className="h-1 bg-blue-600 w-16 rounded-md"></div>
        </div>

        {/* Message d'erreur */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl p-3 mb-4 text-sm">
            {error}
          </div>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <div className="mb-1 mt-4">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {t("fullName")}
            </label>
          </div>
          <TextField
            fullWidth
            placeholder={t("enterFullName")}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
          />

          <div className="mb-1 mt-4">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {t("emailAddress")}
            </label>
          </div>
          <TextField
            fullWidth
            placeholder="example@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
          />

          <div className="mb-1 mt-4">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {t("password")}
            </label>
          </div>
          <TextField
            fullWidth
            placeholder={t("createPassword")}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div className="mb-1 mt-4">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {t("confirmPassword")}
            </label>
          </div>
          <TextField
            fullWidth
            placeholder={t("reEnterPassword")}
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <p className="text-center text-gray-600 dark:text-gray-400 pt-6 text-sm">
            {t("iAgree")}{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              {t("termsOfService")}
            </a>{" "}
            {t("and")}{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              {t("privacyPolicy")}
            </a>
          </p>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-gradient-to-r from-[#3550DC] to-[#27E9F7] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow disabled:opacity-50"
          >
            {loading ? t("creatingAccount") : t("createAccount")}
          </button>
        </Box>

        <div className="m-8"></div>

        <p className="text-center text-gray-600 dark:text-gray-400">
          {t("alreadyHaveAccount")}{" "}
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 font-semibold hover:underline"
          >
            {t("signIn")}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
/*
+ import api          →  appel au backend
+ async/await         →  register réel
+ localStorage        →  sauvegarde token + name
+ error state         →  affiche erreurs (email déjà utilisé...)
+ loading state       →  bouton "Création du compte..."
- alert()             →  remplacé par message d'erreur propre
- navigate dans button →  dans le try maintenant
*/

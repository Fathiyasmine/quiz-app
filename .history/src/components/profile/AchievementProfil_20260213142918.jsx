

const AchievementProfil = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white -mt-10 rounded-t-3xl shadow-lg p-6 flex flex-col min-h-screen">
      <div className="flex justify-center mb-4">
        <div className="h-1 bg-blue-600 w-16 rounded-md"></div>
      </div>
     </div>
        

   
  );


export default AchievementProfil;

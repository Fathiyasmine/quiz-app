const Log = () => {
  return (
    <div className="bg-white -mt-24 rounded-t-3xl p-6 pb-24 relative min-h-full shadow-md">
      <div className="flex justify-center mb-4">
        <div className="h-1 bg-blue-600 w-16 rounded-md"></div>
      </div>
      <h2 className="font-semibold text-lg mb-4 font-nunito">Welcome Back!</h2>
    <h3 className="font-semibold text-lg mb-4 font-nunito">Please enter your details to sign in</h3>
    <div>
        <div>
            <form>
                <label 
                <input type="email"></input>
            </form>
        </div>
    </div>

    </div>
  );
};

export default Log;

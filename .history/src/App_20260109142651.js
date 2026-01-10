function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">✅ ÇA MARCHE !</h1>
        <p className="text-2xl text-white">
          React + Tailwind CSS fonctionnent correctement
        </p>
        <div className="mt-8">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Bouton Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

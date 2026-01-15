const Categories = ({ activeCategory, setActiveCategory }) => {
  const categories = ["Popular", "Science", "Mathematic", "Computer"];

  return (
    <div className=" min-h-[600px] rounded-3xl p-6 pb-24 ">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 font-Nunito whitespace-nowrap flex-shrink-0 relative ${
            activeCategory === cat ? "text-blue-500" : "text-[#999999]"
          }`}
        >
          {cat}
          {activeCategory === cat && (
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-3/4"
              style={{
                background: "linear-gradient(to right, #3550DC, #27E9F7)",
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default Categories;

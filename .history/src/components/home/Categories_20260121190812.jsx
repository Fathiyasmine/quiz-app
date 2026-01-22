const Categories = ({ activeCategory, setActiveCategory }) => {
  const categories = ["Popular", "Science", "Mathematic", "Computer"];

  return (
    <div className="flex justify-between items-center mb-2 rounded-t-3xl pl-6 pr-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`font-Nunito whitespace-nowrap shrink-0 relative mt-2 gap-6 ${
            activeCategory === cat ? "text-blue-500" : "text-[#999999]"
          }`}
        >
          {cat}
          {activeCategory === cat && (
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-2/4 rounded-md"
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

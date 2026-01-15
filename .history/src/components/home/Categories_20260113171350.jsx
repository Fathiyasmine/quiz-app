import { useState } from "react";

const Categories = () => {
  // État de la catégorie active => useState
  const [activeCategory, setActiveCategory] = useState("Computer");

  // Liste des catégories:
  const categories = ["Popular", "Science", "Mathematic", "Computer"];

  /* Categories: création de button pour chaque catégorie avec map qui passe sur toutes les cat de l'array */
  return (
    <div>
      <div className="flex justify-center mb-2 pt-3">
        <div className="h-1 bg-[#3550DC] w-16 rounded-md"></div>
      </div>
      <div className="flex gap-1 overflow-x-auto mb-4 mr-2 pt-3 ml-2 rounded-t-3xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 font-Nunito whitespace-nowrap flex-shrink-0 relative ${
              activeCategory === cat
                ? "text-blue-500 border-[#3550DC]"
                : "text-[#999999]"
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
    </div>
  );
};

export default Categories;

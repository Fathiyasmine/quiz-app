import { useState } from "react";

const Categories = () => {
  // État de la catégorie active => useState
  const [activeCategory, setActiveCategory] = useState("Computer");

  // Liste des catégories:
  const categories = ["Popular", "Science", "Mathematic", "Computer"];

  /* Categories: création de button pour chaque catégorie avec map qui passe sur toutes les cat de l'array */
  return (
    <div className="flex gap-1 overflow-x-auto mb-4 mr-2 ml-2 rounded-t-3xl scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 font-Nunito whitespace-nowrap flex-shrink-0 ${
            activeCategory === cat
              ? "text-blue-500 border-blue-300"
              : "text-[#999999]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;

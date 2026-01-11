import { useState } from "react";

const Categories = () => {
  // État de la catégorie active => useState
  const [activeCategory, setActiveCategory] = useState("Computer");

  // Liste des catégories:
  const categories = ["Popular", "Science", "Mathematic", "Computer"];

  /* Categories: création de button pour chaque catégorie avec map qui passe sur toutes les cat de l'array */
  return (
    <div className="flex gap-4 mb-4 overflow-x-auto rounnded-t-3xl ">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            activeCategory === cat
              ? "text-blue-500 border-b-2 border-blue-300"
              : "text-gray-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;

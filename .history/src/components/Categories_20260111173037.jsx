import { useState } from "react";
const categories = () => {
  //etat de la categorie active =>uuseState
  const [activeCategory, setActiveCategory] = useState("Computer");
  //liste des categories:
  const categories = ["Popular", "Science", "Mathematic", "Computer"];
  {
    /* Categories: creation de button pour chaque categorie avec map qui passe sur toute les cat de l'array */
  }
  return (
    <div className="flex gap-4 mb-4 overflow-x-auto">
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

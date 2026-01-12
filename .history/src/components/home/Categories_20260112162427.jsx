import { useState } from "react";

const Categories = () => {
  // État de la catégorie active => useState
  const [activeCategory, setActiveCategory] = useState("Computer");

  // Liste des catégories:
  const categories = ["Popular", "Science", "Mathematic", "Computer"];
  //au debut, toutes les categories sont affichées
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const filterCategories = (value) => {
    const filtered = categories.filter((cat) =>
      cat.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCategories(filtered);
  };
  /* Categories: création de button pour chaque catégorie avec map qui passe sur toutes les cat de l'array */
  return (
    <div className="flex gap-4 mb-4 mr-2 ml-2 rounnded-t-3xl ">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 font-Nunito whitespace-nowrap ${
            activeCategory === cat
              ? "text-blue-500 border-blue-300"
              : "text-[#999999]"
          }`}
        >
          {cat}
        </button>
      ))}
      <div className="flex flex-wrap gap-2 mt-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div
              key={category}
              className="bg-white text-blue-600 px-4 py-2 rounded-full font-dm"
            >
              {category}
            </div>
          ))
        ) : (
          <p className="text-white/70">Aucune catégorie trouvée</p>
        )}
      </div>
    </div>
  );
};

export default Categories;

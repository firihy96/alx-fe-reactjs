import { useState, useEffect } from 'react';
import data from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-t-lg w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600 mt-1">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addFavorite, favorites, removeFavorite } = useFavorites();

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      setRecipe(data.meals[0]);
      setLoading(false);
    };
    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg">Loading recipe...</p>;
  }

  if (!recipe) {
    return <p className="text-center text-lg">Recipe not found.</p>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(
        `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
      );
    }
  }

  const isFav = favorites.some((fav) => fav.idMeal === recipe.idMeal);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-96 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{recipe.strMeal}</h1>
          <button
            onClick={() => (isFav ? removeFavorite(recipe.idMeal) : addFavorite(recipe))}
            className={`px-4 py-2 rounded ${isFav ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          >
            {isFav ? "Remove Favorite" : "Add to Favorites"}
          </button>
        </div>
        <p className="text-gray-600 mb-4">{recipe.strArea} • {recipe.strCategory}</p>
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 whitespace-pre-line">{recipe.strInstructions}</p>
        {recipe.strYoutube && (
          <div className="mt-4">
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Watch on YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

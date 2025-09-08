import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function RecipeCard({ recipe }) {
  const { addFavorite, favorites, removeFavorite } = useFavorites();
  const isFav = favorites.some((fav) => fav.idMeal === recipe.idMeal);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-500">{recipe.strArea} • {recipe.strCategory}</p>
        <div className="flex gap-2 mt-3">
          <Link
            to={`/recipe/${recipe.idMeal}`}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            View
          </Link>
          <button
            onClick={() => (isFav ? removeFavorite(recipe.idMeal) : addFavorite(recipe))}
            className={`px-4 py-2 rounded ${isFav ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          >
            {isFav ? "Remove" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}

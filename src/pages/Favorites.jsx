import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

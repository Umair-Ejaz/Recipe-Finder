import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import SkeletonCard from "../components/SkeletonCard";

export default function Recipes() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;
    const fetchRecipes = async () => {
      setLoading(true);
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setRecipes(data.meals || []);
      setLoading(false);
    };
    fetchRecipes();
  }, [query]);

  if (!query) {
    return <p className="text-center text-lg mt-10">Please enter a search term.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No recipes found.</p>
      )}
    </div>
  );
}

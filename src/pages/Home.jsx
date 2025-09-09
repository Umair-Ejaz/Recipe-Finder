import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/recipes?search=${search}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      <h1 className="text-4xl font-bold mb-4">Find Your Favorite Recipes</h1>
      <p className="text-gray-600 mb-6">
        Search from thousand of delicious recipes by Umair's foods.
      </p>
      <form
        onSubmit={handleSearch}
        className="flex items-center border border-gray-300 rounded overflow-hidden w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Search for a recipe..."
          className="flex-1 px-4 py-2 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 hover:bg-green-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}

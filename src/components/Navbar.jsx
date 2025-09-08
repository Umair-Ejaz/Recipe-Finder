import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          🍴 Recipe Finder
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/recipes?search=chicken" className="hover:underline">Explore</Link>
          <Link to="/favorites" className="hover:underline">Favorites</Link>
        </div>
      </div>
    </nav>
  );
}

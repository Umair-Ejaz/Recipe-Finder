import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page not found.</p>
      <Link to="/" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Go Home
      </Link>
    </div>
  );
}

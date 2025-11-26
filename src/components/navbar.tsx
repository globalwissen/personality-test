import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          Forge Test
        </Link>
        <div className="flex gap-3">
          <Link to="/start" className="text-sm text-slate-700">
            Take Test
          </Link>
          <Link to="/login" className="text-sm text-slate-700">
            Login
          </Link>
          <Link to="/register" className="text-sm text-slate-700">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

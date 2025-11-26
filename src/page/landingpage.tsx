import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Academic Personality Test</h1>
      <p className="text-gray-600 mb-8">
        Short MBTI-style test to place students into groups: techpreneur,
        intrapreneur, entrepreneur.
      </p>

      <div className="flex justify-center gap-4">
        <Link to="/start" className="px-6 py-3 bg-[#003058] text-white rounded">
          Start Test
        </Link>
        <Link to="/register" className="px-6 py-3 border rounded">
          Register
        </Link>
      </div>
    </div>
  );
}

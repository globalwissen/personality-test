import { Link } from "react-router-dom";

export default function StartTest() {
  return (
    <div className="text-center mt-12">
      <h2 className="text-3xl font-semibold mb-2">
        Ready for the Personality Test?
      </h2>
      <p className="text-gray-600 mb-6">
        This test is short (around 24 items) and will place you into a category
        for group assignment.
      </p>
      <div className="flex justify-center gap-3">
        <Link to="/test" className="px-6 py-3 bg-[#003058] text-white rounded">
          Start Test
        </Link>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const nav = useNavigate();
  const raw = localStorage.getItem("lastResult");
  if (!raw) {
    return (
      <div className="text-center mt-12">
        <p>No result found. Please take the test.</p>
        <button
          onClick={() => nav("/test")}
          className="mt-3 px-4 py-2 bg-[#003058] text-white rounded"
        >
          Take test
        </button>
      </div>
    );
  }

  const result = JSON.parse(raw) as {
    type: string;
    category: "entrepreneur" | "techpreneur" | "intrapreneur";
    percent: { E: number; S: number; T: number; J: number };
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Your Result</h2>

      <div className="mb-4">
        <div className="text-lg">
          Personality type: <strong>{result.type}</strong>
        </div>
        <div className="text-sm text-gray-600">
          Assigned category:{" "}
          <strong className="capitalize">{result.category}</strong>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="text-sm text-gray-600">Extraversion</div>
          <div className="text-lg">{result.percent.E}%</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Sensing</div>
          <div className="text-lg">{result.percent.S}%</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Thinking</div>
          <div className="text-lg">{result.percent.T}%</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Judging</div>
          <div className="text-lg">{result.percent.J}%</div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => nav("/start")}
          className="px-4 py-2 border rounded"
        >
          Back
        </button>
        <button
          onClick={() => {
            // optionally send to backend to save result and update student.category
            // axios.post('/student/personality-test', { type: result.type, category: result.category })
            alert("Result saved (placeholder). Connect to backend to persist.");
          }}
          className="px-4 py-2 bg-[#003058] text-white rounded"
        >
          Save result
        </button>
      </div>
    </div>
  );
}

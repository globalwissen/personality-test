export default function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-4 px-8">
      <div className="text-sm text-gray-600 mb-1">
        {current} / {total}
      </div>
      <div className="h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-[#003058] rounded"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="space-y-4">
      <h2>Failed to load page.</h2>

      <button onClick={reset}>Retry</button>
    </div>
  );
}

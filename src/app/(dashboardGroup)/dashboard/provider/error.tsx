"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="space-y-4">
      <p>Failed to load Provider dashboard.</p>

      <button onClick={reset}>Try Again</button>
    </div>
  );
}

"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="space-y-4">
      <p>Failed to load your gears.</p>

      <button onClick={reset}>Try Again</button>
    </div>
  );
}

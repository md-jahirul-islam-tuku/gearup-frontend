"use client";

import CommonError from "@/components/shared/error/CommonError";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <CommonError error={error} reset={reset} />;
}

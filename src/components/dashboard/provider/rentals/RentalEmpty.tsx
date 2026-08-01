export default function RentalEmpty() {
  return (
    <div className="rounded-xl border p-12 text-center">
      <h2 className="text-xl font-semibold">No rentals found</h2>

      <p className="mt-2 text-muted-foreground">
        Your rental orders will appear here.
      </p>
    </div>
  );
}

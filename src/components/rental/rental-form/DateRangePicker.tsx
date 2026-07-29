"use client";

type Props = {
  startDate: string;
  endDate: string;

  onStartDateChange: (value: string) => void;

  onEndDateChange: (value: string) => void;
};

export default function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="space-y-2">
        <label className="font-medium">Start Date</label>

        <input
          type="date"
          className="w-full rounded-lg border p-2"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="font-medium">End Date</label>

        <input
          type="date"
          className="w-full rounded-lg border p-2"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </div>
    </div>
  );
}

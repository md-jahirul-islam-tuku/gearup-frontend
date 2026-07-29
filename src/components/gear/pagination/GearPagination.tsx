type Props = {
  currentPage: number;
  totalPage: number;
};

export default function GearPagination({ currentPage, totalPage }: Props) {
  return (
    <div className="mt-12 flex items-center justify-center gap-3">
      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPage}
      </span>
    </div>
  );
}

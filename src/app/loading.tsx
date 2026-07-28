import { Loader2 } from "lucide-react";

const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 animate-ping rounded-full bg-primary/20" />
        <div className="absolute h-20 w-20 rounded-full border-4 border-primary/20" />
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    </div>
  );
};

export default GlobalLoading;

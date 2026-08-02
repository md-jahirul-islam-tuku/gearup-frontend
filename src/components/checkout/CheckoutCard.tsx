import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function CheckoutCard({ children }: Props) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">{children}</div>
  );
}

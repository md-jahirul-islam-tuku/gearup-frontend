import Footer from "@/components/shared/footer/page";
import { Navbar } from "@/components/shared/navbar/navbar";
import { getMe } from "@/services/auth/me";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getMe();
  return (
    <div>
      <Navbar user={user} />
      {children}
      <Footer />
    </div>
  );
}

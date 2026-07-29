import { Navbar } from "@/components/shared/navbar/navbar";
import { getMe } from "@/services/auth/me";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getMe();
  console.log(user);
  return (
    <div>
      <Navbar user={user} />
      {children}
    </div>
  );
}

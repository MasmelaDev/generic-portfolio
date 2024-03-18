import { SessionAuthProvider } from "@/context/session-auth-provider";
export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <SessionAuthProvider>{children}</SessionAuthProvider>;
}

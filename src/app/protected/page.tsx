// src/app/protected/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session) {
    // Redirect to the home page if the user is not authenticated
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Protected Page</h1>
      <p>
        가입을 환영합니다!,
        <br />
        {session.user?.name}, {session.user?.email}
      </p>
    </div>
  );
}

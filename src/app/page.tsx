// src/app/page.tsx

"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Kakao Login</h1>
      {session ? (
        <div>
          <p>로그인되었습니다. 환영합니다! {session.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("kakao")}
          className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded"
        >
          Sign in with Kakao
        </button>
      )}
    </div>
  );
}

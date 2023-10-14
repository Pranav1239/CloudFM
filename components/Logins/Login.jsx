"use client";
import GoogleImage from "../../assets/google.png";
import GithubImage from "../../assets/github.png";
import { Button } from "../ui/button";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { status } = useSession();

  return (
    <>
       {status === "authenticated" ? (
        <div>
          <Button
            variant="outline"
            onClick={() => signOut()}
            className="mx-2 w-full bg-blue-500 border-none bg-transparent hover:underline"
          >
            Logout
          </Button>
        </div>
      ) : ( 
        <div className="flex justify-center flex-col gap-3">
          <Button
            onClick={() => signIn("google")}
            variant="outline"
            className="w-full"
          >
            <Image
              src={GoogleImage}
              alt="google"
              width={25}
              height={25}
              className="mx-3"
            />
            Continue with Google
          </Button>
          <Button
            onClick={() => signIn("github")}
            variant="outline"
            className="w-full"
          >
            <Image
              src={GithubImage}
              alt="github"
              width={25}
              height={25}
              className="mx-3"
            />
            Continue with Github
          </Button>
        </div>
      )}
    </>
  );
}

"use client";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
export default function NavLogin() {
  const { status } = useSession();
  return (
    <div>
        {
            status === 'authenticated' ? (
                <Button variant="outline">logout</Button>
            ) : (
                <Button variant="outline">Login</Button>
            )
        }

    </div>
  );
}

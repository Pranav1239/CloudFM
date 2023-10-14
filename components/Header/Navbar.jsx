"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "../Common/Theme";
import SlideBar from "./SlideBar";

export default function Navbar() {

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="">
        <SlideBar /> 
      </div>
      <div className="flex flex-row gap-2">
        <Button variant="outline">
          <Link href={"/"}>Home</Link>
        </Button>
      </div>
    </div>
  );
}

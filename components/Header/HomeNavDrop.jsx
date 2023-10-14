"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {FaBars} from 'react-icons/fa'
import Login from "../Logins/Login";
import MainLog from "../Logins/MainLog";


export default function HomeNavDrop() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
            <FaBars />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <MainLog />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

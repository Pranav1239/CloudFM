import Link from "next/link";
import HomeNavDrop from "./HomeNavDrop";
import Theme, { ModeToggle } from "../Common/Theme";


export default function HomeNav() {
  return (
    <div className="p-4 flex justify-between">
        <div>
            <ul className="flex flex-row gap-6 font-medium ">
                <Link href={"/"} className="hover:underline">Home</Link>
                <Link href={"/cloud"} className="hover:underline">Cloud</Link>
            </ul>
        </div>
        <div className="flex gap-5 flex-row items-center">
            <HomeNavDrop />
        </div>
    </div>
  )
}

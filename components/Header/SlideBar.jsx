import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFile, AiOutlineStar } from "react-icons/ai";
import { BsTrash2 } from "react-icons/bs";
import AddFile from "../Common/AddFile";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";

export default function SlideBar() {
  const { status } = useSession();
  const router = useRouter();
  const HandleError = () => {
    toast.error("Please Login to use", { theme: "colored" });
  };
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          {status === "authenticated" ? (
            <div className="opacity-80">
              <FaBarsStaggered size={25} />
            </div>
          ) : (
            <div className="opacity-80" onClick={HandleError}>
              <FaBarsStaggered size={25} />
            </div>
          )}
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>
              <Link
                href={"/"}
                className="font-extrabold text-xl text-center opacity-90 mt-4 mb-3"
              >
                FileManagar.
              </Link>
            </SheetTitle>
            <SheetDescription>
              <div className="border-none">
                <div className="mt-8 flex flex-col gap-5">
                  <Button
                    variant="secondary"
                    className="hover:scale-105 hover:shadow-md cursor-pointer"
                  >
                    Add New File
                  </Button>
                  <div className="w-full justify-center flex ">
                    <AddFile />
                  </div>
                </div>
                <div className="mt-10 flex justify-center flex-col">
                  <div className="p-4 rounded-full cursor-pointer hover:font-extrabold flex flex-row gap-3 items-center justify-evenly">
                    <div>
                      <span>
                        <AiOutlineHome size={24} />
                      </span>
                    </div>
                    <div>
                      <h3>Home</h3>
                    </div>
                  </div>
                  <div className="p-4 rounded-full cursor-pointer hover:font-extrabold flex flex-row gap-3 items-center justify-evenly">
                    <div>
                      <span>
                        <AiOutlineFile size={21} />
                      </span>
                    </div>
                    <div>
                      <h3>My Files</h3>
                    </div>
                  </div>
                  <div className="p-4 rounded-full cursor-pointer hover:font-extrabold flex flex-row gap-3 items-center justify-evenly">
                    <span>
                      <AiOutlineStar size={25} />
                    </span>
                    <h3>Starred</h3>
                  </div>
                  <div className="p-4 rounded-full cursor-pointer hover:font-extrabold flex flex-row gap-3 items-center justify-evenly">
                    <div>
                      <span>
                        <BsTrash2 size={22} />
                      </span>
                    </div>
                    <div>
                      <h3> Trash</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

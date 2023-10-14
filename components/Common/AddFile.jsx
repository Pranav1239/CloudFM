"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import FolderImage from "../../assets/folder.png";
import { useState } from "react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddFile() {
  const { data: session } = useSession();
  const docId = Date.now().toString();
  const [createFolder, setCreateFolder] = useState("");
  const [loading, setLoading] = useState(false);
  const db = getFirestore(app);
  const HandleCreate = async () => {
    try {
        setLoading(true);
        console.log(createFolder);
        await setDoc(doc(db, "Folders", docId), {
          name: createFolder,
          id: docId,
          createBy: session.user.email,
        });
        toast.success("Succesfully Created Folder", { theme: "colored" });
        setLoading(false)
    } catch (error) {
        console.log(error)
        toast.error("Error While Creating folder", { theme: "colored" });
        setLoading(true);
    }
  };
  return (
    <div >
      <Dialog>
        <DialogTrigger>
          <div>
            <Button variant="secondary"
            className="hover:scale-105 hover:shadow-md cursor-pointer"
            >New Folder</Button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex gap-6 items-center ">
                <Image
                  src={FolderImage}
                  alt="Folder Image"
                  width={50}
                  height={50}
                />
                <h1 className="font-bold text-xl">Add new Folder</h1>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="flex justify-center gap-4 flex-col">
                <input
                  type="text"
                  placeholder="Folder name..."
                  className="p-2 border-[1px] outline-none rounded-md"
                  onChange={(e) => setCreateFolder(e.target.value)}
                />
                <Button variant="outline"
                disabled={loading}
                onClick={HandleCreate}>
                {loading ? "Processing..." : "Submit"}
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

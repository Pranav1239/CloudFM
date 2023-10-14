"use client"
import Toastify from "@/components/Common/Toastify";
import MainFiles from "@/components/Files/MainFiles";
import Folder from "@/components/Folder/Folder";
import Navbar from "@/components/Header/Navbar";
import StorageMain from "@/components/Storage/StorageMain";
import { app } from "@/config/FirebaseConfig";
import { collection, getFirestore, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function page() {
    const {data : session} = useSession();
    const router = useRouter();
    const db = getFirestore(app)

    useEffect(()=>{
        console.log("User Session",)
        if(!session)
        {
          router.push("/")
        }
        else{
          console.log("User Session",session.user)
        }
    
      },[session])
  return (
    <>
      <div>
        <div className="p-4">
        <Navbar />
        </div>

        <Toastify />
        <main className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div>
              <Folder />
            </div>
            <div>
              <StorageMain />
            </div>
          </div>
          <div>
            <MainFiles />
          </div>
        </main>
      </div>
    </>
  );
}

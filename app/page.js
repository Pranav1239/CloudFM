"use client";
import Footer from "@/components/Footer/Footer";
import HomeNav from "@/components/Header/HomeNav";
import Hero1 from "@/components/Hero/Hero1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      {/* <div>
      <h1>Homepage</h1>
      <Link href={"/cloud"}>go to home</Link>
    </div>
    <MainLog /> */}
    <HomeNav />
    <ToastContainer />
    <Hero1 />
    <Footer />
    </>
  );
}

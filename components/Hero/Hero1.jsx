import MainLog from "@/components/Logins/MainLog";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroImage from "../../assets/Hero.png";
import { FaArrowDown } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero1() {
    const { status } = useSession();
    const router = useRouter();
    const HandleError = () => {
      toast.error("Please Login", { theme: "colored" });
    };
  return (
    <div>
              <div className="p-4 mt-16 flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              CloudFM - Place To Save Your Files
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            CloudFM is your ultimate file storage solution. With robust folder management, it empowers you to organize and store a multitude of files efficiently, enhancing your productivity and file management experience.
            </p>

            <div>
              {status === "authenticated" ? (
                <Link href={"/cloud"}>
                  <p className="text-2xl cursor-pointer hover:underline mt-3 font-extrabold opacity-75">
                    Visit CloudFM
                  </p>
                </Link>
              ) : (
                <p
                  onClick={HandleError}
                  className="text-2xl cursor-pointer hover:underline mt-3 font-extrabold opacity-75"
                >
                  Visit CloudFM
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={HeroImage}
              width="616"
              height="617"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image";
import folderImage from '../../assets/folder.png'    

export default function RecentFolders({folder}) {
  return (
    <div className="p-6 w-full flex flex-col justify-center items-center h-[80px] rounded-lg  hover:scale-105 hover:shadow-md cursor-pointer">
        <Image 
        src={folderImage}
        alt="Folder"
        width={40}
        height={40}
        />
        <h1 className="text-sm">{folder.name}</h1>
    </div>
  )
}

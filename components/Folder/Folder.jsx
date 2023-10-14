import { Input } from "@/components/ui/input";
import RecentFolders from "./RecentFolders";

export default function Folder() {
  const folderList = [
    {
      id: 1,
      name: "folder1",
    },
    {
      id: 2,
      name: "folder2",
    },
    {
      id: 3,
      name: "folder3",
    },
    {
      id: 4,
      name: "folder4",
    },
    {
      id: 5,
      name: "folder5",
    },
    {
      id: 6,
      name: "folder6",
    },
    {
      id: 7,
      name: "folder7",
    },
    {
      id: 8,
      name: "folder8",
    },
    {
      id: 9,
      name: "folder9",
    },
    {
      id: 10,
      name: "folder10",
    },
  ];

  return (
    <div className="bg-slate-50-100">
      <div className="mt-4">
        <Input
          type="text"
          className="w-[70%] border-2 bg-transparent font-medium"
          placeholder="seach here"
        />
      </div>
      <div className="mt-6 p-4 rounded-lg">
        <h1 className="font-extrabold capitalize cursor-default text-xl">
          Recent Folders
        </h1>
        <div className="mt-6 grid place-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {folderList.map((item) => {
            return (
              <div>
                <RecentFolders folder={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FilesCard from "./FilesCard";

export default function MainFiles() {
  const FileLists = [
    {
      id: 1,
      name: "Data strucre.pdf",
      type: "pdf",
      size: "672 kb",
      modified: "Nov 2, 2005",
    },
    {
      id: 1,
      name: "Data strucre.pdf",
      type: "pdf",
      size: "672 kb",
      modified: "Nov 2, 2005",
    },
    {
      id: 1,
      name: "Data strucre.pdf",
      type: "pdf",
      size: "672 kb",
      modified: "Nov 2, 2005",
    },
    {
      id: 1,
      name: "Data strucre.pdf",
      type: "pdf",
      size: "672 kb",
      modified: "Nov 2, 2005",
    },
  ];
  return (
    <div>
      <div className="mt-6 p-2 rounded-lg">
        <h1 className="font-extrabold capitalize cursor-default text-xl">
          Recent Folders
        </h1>
      </div>
      <div>
        {FileLists.map((item) => {
          return (
            <div>
              <FilesCard FilesItem={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

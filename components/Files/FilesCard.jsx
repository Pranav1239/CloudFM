

export default function FilesCard({ FilesItem }) {
  return (
    <div>
      <div>
        <div className="flex p-4 flex-row justify-between items-center">
            <h1>{FilesItem.name}</h1>
            <h1>{FilesItem.size}</h1>
            <h1>{FilesItem.type}</h1>
            <h1>{FilesItem.modified}</h1>
        </div>
      </div>
    </div>
  );
}

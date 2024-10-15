import { Column, Id } from "../types";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

export function ColumnContainer(props: Props) {
  const { column, deleteColumn } = props;
  return (
    <div className="bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
      {/* Column title*/}
      <div className="flex items-center justify-between bg-mainBackgroundColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columnBackgroundColor border-4">
        <div className="flex gap-2">
          <div className="rounded-full flex justify-center items-center bg-columnBackgroundColor px-2 py-1 text-sm">
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="stroke-gray-500 hover:bg-columnBackgroundColor rounded px-1 py-2"
        >
          삭제
        </button>
      </div>
      {/* Column task container  */}
      <div className="flex flex-grow"></div>
      {/* Column footer */}
      <div>Footer</div>
    </div>
  );
}

export default ColumnContainer;

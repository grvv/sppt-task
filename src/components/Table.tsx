import clsx from "clsx";
import { ReactElement, ReactNode } from "react";

export interface TableColumn<T> {
  header: string;
  value: keyof T | ((e: T) => string | JSX.Element);
  uniqueKey: (e: T, index: number) => string;
}

export interface TableProp<T> {
  className?: string;
  children?: ReactNode;
  columns: TableColumn<T>[];
  data: Array<T> | undefined;
  idExtractor: (e: T) => string;
  rowClickHandler?: (e: React.MouseEvent<HTMLElement>, item: T) => void;
}

export default function Table<T>({
  data,
  columns,
  children,
  idExtractor,
  className = "",
  rowClickHandler,
}: TableProp<T>): ReactElement {
  return (
    <div className={clsx("flex flex-col", className)}>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th
                      scope="col"
                      key={`th_${column.header}`}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((item) => (
                  <tr
                    key={`tr_${idExtractor(item)}`}
                    className={clsx(rowClickHandler && "cursor-pointer")}
                    onClick={(e) => rowClickHandler && rowClickHandler(e, item)}
                  >
                    {columns.map((column, index) => {
                      const value =
                        typeof column.value !== "function"
                          ? item[column.value]
                          : column.value(item);
                      return (
                        <td
                          key={`td_${idExtractor(item)}_${column.uniqueKey(
                            item,
                            index
                          )}`}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          <div className="flex items-center">{value}</div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

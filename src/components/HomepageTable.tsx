import type { Dispatch } from "preact/hooks";
import classNames from "classnames";
import type { SetStateAction } from "preact/compat";
import type { HomepageSlideRow } from "./HomepageDemo";

interface HomepageTableProps {
  rows: HomepageSlideRow[];
  setRows: Dispatch<SetStateAction<HomepageSlideRow[]>>;
}

export function HomepageTable({ rows, setRows }: HomepageTableProps) {
  return (
    <table className="border-collapse text-sm min-h-full">
      <thead>
        <tr>
          <th className="bg-stone-100 border border-stone-300 px-2 py-1 border-l-0 border-t-0">
            #
          </th>
          <th className="bg-stone-100 border border-stone-300 px-2 py-1 border-t-0">
            Date
          </th>
          <th className="bg-stone-100 border border-stone-300 px-2 py-1 border-t-0">
            Reminders
          </th>
          <th className="bg-stone-100 border border-stone-300 px-2 py-1 border-r-0 border-t-0">
            Warm Up
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index, arr) => {
          const setRow = (newRow: HomepageSlideRow) => {
            setRows([
              ...rows.slice(0, index),
              newRow,
              ...rows.slice(index + 1),
            ]);
          };
          return (
            <tr>
              <td
                className={classNames([
                  "border border-stone-300 border-l-0 text-center",
                  { "border-b-0": index === arr.length - 1 },
                ])}
              >
                {index + 1}
              </td>
              <td
                onClick={onClickTdFocusTextarea}
                className={classNames([
                  "align-top cursor-text border border-stone-300 focus-within:ring-3 ring-blue-500/80 ring-inset",
                  { "border-b-0": index === arr.length - 1 },
                ])}
              >
                <textarea
                  className="px-2 py-1 w-full field-sizing-content resize-none whitespace-pre outline-none -mb-1"
                  onInput={(e) => {
                    setRow({ ...row, date: e.currentTarget.value });
                  }}
                >
                  {row.date}
                </textarea>
              </td>
              <td
                onClick={onClickTdFocusTextarea}
                className={classNames([
                  "align-top cursor-text border border-stone-300 focus-within:ring-3 ring-blue-500/80 ring-inset",
                  { "border-b-0": index === arr.length - 1 },
                ])}
              >
                <textarea
                  className="px-2 py-1 w-full field-sizing-content resize-none whitespace-pre outline-none -mb-1"
                  onInput={(e) => {
                    setRow({ ...row, reminders: e.currentTarget.value });
                  }}
                >
                  {row.reminders}
                </textarea>
              </td>
              <td
                onClick={onClickTdFocusTextarea}
                className={classNames([
                  "align-top cursor-text border border-stone-300 border-r-0 focus-within:ring-3 ring-blue-500/80 ring-inset",
                  { "border-b-0": index === arr.length - 1 },
                ])}
              >
                <textarea
                  className="px-2 py-1 w-full field-sizing-content resize-none whitespace-pre outline-none -mb-1"
                  onInput={(e) => {
                    setRow({ ...row, warmUp: e.currentTarget.value });
                  }}
                >
                  {row.warmUp}
                </textarea>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function onClickTdFocusTextarea(event: MouseEvent) {
  const td = event.currentTarget as HTMLTableCellElement;
  const textarea = td.querySelector("textarea");
  textarea?.focus();
}

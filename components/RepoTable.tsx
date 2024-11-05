"use client";

import React, { useState, FC } from "react";

interface Header {
  key: string;
  header: string;
}

interface Cell {
  id: string;
  value: string;
}

interface Row {
  id: string;
  cells: Cell[];
  description: string;
}

interface RepoTableProps {
  rows: Row[];
  headers: Header[];
}

const RepoTable: FC<RepoTableProps> = ({ rows, headers }) => {
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);

  const toggleRowExpansion = (rowId: string) => {
    setExpandedRowId(expandedRowId === rowId ? null : rowId);
  };

  const getRowDescription = (rowId: string) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.description : "";
  };

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">
        Michelle Currier's Repositories
      </h2>
      <p className="text-gray-600 mb-6">
        A collection of my public repositories.
      </p>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-4 text-center"></th>
              {headers.map((header) => (
                <th key={header.key} className="py-3 pl-4 pr-0 font-semibold">
                  {header.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {rows.map((row) => (
              <React.Fragment key={row.id}>
                <tr
                  className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={() => toggleRowExpansion(row.id)}
                >
                  <td className="py-3 pr-0 pl-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 focus:outline-none">
                      {expandedRowId === row.id ? "-" : "+"}
                    </button>
                  </td>
                  {row.cells.map((cell) => (
                    <td key={cell.id} className="py-3 px-4">
                      {cell.value}
                    </td>
                  ))}
                </tr>
                {expandedRowId === row.id && (
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <td colSpan={headers.length + 1} className="py-3 pl-16">
                      <p>{getRowDescription(row.id)}</p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepoTable;

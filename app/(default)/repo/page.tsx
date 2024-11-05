"use client";

import React, { useEffect, useState } from "react";
import RepoTable from "../../../components/RepoTable";
import { Octokit } from "@octokit/core";

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

const octokitClient = new Octokit({});

const LinkList: React.FC<{ url: string; homepageUrl?: string | null }> = ({
  url,
  homepageUrl,
}) => (
  <div className="flex space-x-2">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
    >
      GitHub
    </a>
    {homepageUrl && (
      <a
        href={homepageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
      >
        Website
      </a>
    )}
  </div>
);

const headers: Header[] = [
  { key: "name", header: "Name" },
  { key: "createdAt", header: "Created" },
  { key: "updatedAt", header: "Updated" },
  { key: "issueCount", header: "Open Issues" },
  { key: "stars", header: "Stars" },
  { key: "links", header: "Links" },
];

const getRowItems = (rows: any[]): Row[] =>
  rows.map((repo) => ({
    id: repo.id,
    cells: [
      { id: `${repo.id}-name`, value: repo.name },
      {
        id: `${repo.id}-createdAt`,
        value: new Date(repo.created_at).toLocaleDateString(),
      },
      {
        id: `${repo.id}-updatedAt`,
        value: new Date(repo.updated_at).toLocaleDateString(),
      },
      { id: `${repo.id}-issueCount`, value: repo.open_issues_count.toString() },
      { id: `${repo.id}-stars`, value: repo.stargazers_count.toString() },
      {
        id: `${repo.id}-links`,
        value: <LinkList url={repo.html_url} homepageUrl={repo.homepage} />,
      },
    ],
    description: repo.description || "No description",
  }));

const RepoPage: React.FC = () => {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    async function getCarbonRepos() {
      try {
        const res = await octokitClient.request("GET /users/{username}/repos", {
          username: "michelle-currier",
          per_page: 23,
          sort: "updated",
          direction: "desc",
        });
        if (res.status === 200) {
          setRows(getRowItems(res.data));
        } else {
          setError("Error obtaining repository data");
        }
      } catch (e) {
        setError("Error fetching data");
      }
      setLoading(false);
    }

    getCarbonRepos();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl w-full mx-auto py-8">
        <div className="bg-gray-200 animate-pulse h-12 rounded-md"></div>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 animate-pulse h-8 rounded-md"
          ></div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error! {error}</div>;
  }

  return (
    <div className="max-w-6xl w-full mx-auto py-8">
      <div className="p-4 mt-6">
        <RepoTable
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
        />
        <Pagination
          totalItems={rows.length}
          currentPageSize={currentPageSize}
          onPageChange={(page, pageSize) => {
            setFirstRowIndex(pageSize * (page - 1));
            setCurrentPageSize(pageSize);
          }}
        />
      </div>
    </div>
  );
};

const Pagination: React.FC<{
  totalItems: number;
  currentPageSize: number;
  onPageChange: (page: number, pageSize: number) => void;
}> = ({ totalItems, currentPageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / currentPageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page, currentPageSize);
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center space-x-1">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <select
        value={currentPageSize}
        onChange={(e) => onPageChange(1, parseInt(e.target.value))}
        className="ml-4 p-2 border rounded-md"
      >
        {[5, 10, 15, 25].map((size) => (
          <option key={size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </div>
  );
};

export default RepoPage;

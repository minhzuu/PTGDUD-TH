import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import Modal from "./Modal";
import EditForm from "./EditForm";

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const rowsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Check if data exists in localStorage
        const savedData = localStorage.getItem("tableData");

        if (savedData) {
          // Use cached data if available
          setRows(JSON.parse(savedData));
          setLoading(false);
        } else {
          // Fetch from API if no cached data
          const response = await fetch(
            "https://67da8b1935c87309f52cfe4b.mockapi.io/rows_DataTable"
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setRows(data);
          // Save initial data to localStorage
          localStorage.setItem("tableData", JSON.stringify(data));
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching table data:", err);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (row) => {
    // Format date for the date input (yyyy-MM-dd)
    const formattedRow = {
      ...row,
      date: formatDateForInput(row.date),
    };
    setCurrentRow(formattedRow);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentRow(null);
  };

  const handleSaveChanges = (updatedRow) => {
    // Update local state
    const updatedRows = rows.map((row) =>
      row.id === updatedRow.id ? updatedRow : row
    );

    // Save to localStorage for persistence
    localStorage.setItem("tableData", JSON.stringify(updatedRows));

    // Update component state
    setRows(updatedRows);
    setIsModalOpen(false);
    setCurrentRow(null);
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-emerald-50 text-emerald-600";
      case "in-progress":
      case "active":
        return "bg-amber-50 text-amber-600";
      case "new":
        return "bg-blue-50 text-blue-600";
      case "inactive":
        return "bg-gray-50 text-gray-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  // Format date from API (YYYY-MM-DD) to DD/MM/YYYY for display
  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, "/");
    } catch (e) {
      return dateStr;
    }
  };

  // Format date for input field (YYYY-MM-DD)
  const formatDateForInput = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toISOString().split("T")[0];
    } catch (e) {
      return "";
    }
  };

  // Generate pagination array
  const pagination = () => {
    let pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }
    return pages;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-12 bg-gray-100 rounded"></div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 rounded-lg bg-red-50">
        Error loading table data: {error}
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="p-4 text-left">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-2 border-gray-300 cursor-pointer"
                />
              </th>
              <th className="p-4 text-xs font-semibold text-gray-500">
                CUSTOMER NAME
              </th>
              <th className="p-4 text-xs font-semibold text-gray-500">
                COMPANY
              </th>
              <th className="p-4 text-xs font-semibold text-gray-500">
                ORDER VALUE
              </th>
              <th className="p-4 text-xs font-semibold text-gray-500">
                ORDER DATE
              </th>
              <th className="p-4 text-xs font-semibold text-gray-500">
                STATUS
              </th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-50 hover:bg-gray-50/50"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 cursor-pointer"
                  />
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    {row.avatar ? (
                      <img
                        src={row.avatar}
                        alt={row.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-medium">
                        {row.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-sm text-gray-900 font-medium">
                      {row.name}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-sm text-gray-600">{row.company}</td>
                <td className="p-4 text-sm text-gray-900 font-medium">
                  {row.value}
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {formatDate(row.date)}
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-4">
                  <button
                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => handleEdit(row)}
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">{rows.length} results</div>
          <div className="flex items-center gap-2">
            {pagination().map((page, index) =>
              page === "..." ? (
                <span key={`ellipsis-${index}`} className="text-gray-400">
                  ...
                </span>
              ) : (
                <button
                  key={`page-${page}`}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded border text-sm ${
                    currentPage === page
                      ? "border-rose-500 bg-rose-500 text-white"
                      : "border-gray-200 text-gray-600 hover:border-rose-500 hover:text-rose-500 transition-colors"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Edit Customer"
      >
        <EditForm
          data={currentRow}
          onSubmit={handleSaveChanges}
          onCancel={handleCloseModal}
        />
      </Modal>
    </>
  );
};

export default DataTable;

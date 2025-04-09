import React, { useState, useEffect } from "react";
import { FaEdit, FaFileImport, FaFileExport } from "react-icons/fa";
import Modal from "./Modal";
import EditForm from "./EditForm";
import Notification from "./Notification";
import { BiDetail } from "react-icons/bi";
const DataTable = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://67da8b1935c87309f52cfe4b.mockapi.io/rows_DataTable"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = apiData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(apiData.length / itemsPerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle status styling
  const getStatusStyle = (status) => {
    if (status === "Active" || status === "Completed") {
      return "bg-green-100 text-green-800";
    } else if (status === "In-progress") {
      return "bg-yellow-100 text-yellow-800";
    } else {
      return "bg-blue-100 text-blue-800";
    }
  };

  // Handle opening edit modal
  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  // Handle saving edited data
  const handleSave = (updatedItem) => {
    // In a real application, you would make an API call here to update the data
    // For this example, we'll update it locally
    const updatedData = apiData.map((item) =>
      item.id === updatedItem.id ? { ...item, ...updatedItem } : item
    );

    setApiData(updatedData);
    setIsModalOpen(false);
    setEditingItem(null);

    // Show success notification
    setNotification({
      show: true,
      message: "Item updated successfully!",
      type: "success",
    });

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ ...notification, show: false });
    }, 3000);
  };

  // Close notification
  const closeNotification = () => {
    setNotification({ ...notification, show: false });
  };

  if (loading)
    return (
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div>
              <BiDetail className="h-5 w-5 rounded mr-2" />
            </div>
            <h2 className="text-lg font-bold">Detailed report</h2>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1 text-sm">
              <FaFileImport className="mr-2" /> Import
            </button>
            <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1 text-sm">
              <FaFileExport className="mr-2" /> Export
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="space-y-2">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="h-12 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div>
            <BiDetail className="h-5 w-5 rounded mr-2" />
          </div>
          <h2 className="text-lg font-bold">Detailed report</h2>
        </div>
        <div className="p-4 bg-red-100 text-red-600 rounded-lg">
          Error loading data: {error}
        </div>
      </div>
    );

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div>
            <BiDetail className="h-5 w-5 rounded mr-2" />
          </div>
          <h2 className="text-lg font-bold">Detailed report</h2>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1 text-sm">
            <FaFileImport className="mr-2" /> Import
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1 text-sm">
            <FaFileExport className="mr-2" /> Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8">
                <input type="checkbox" className="h-4 w-4 rounded" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Value
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="h-4 w-4 rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                      <img
                        src={row.avatar}
                        alt={row.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-900">
                      {row.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {row.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {row.value}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {row.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${getStatusStyle(row.status)}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => handleEdit(row)}
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="text-sm text-gray-500">{apiData.length} results</div>
          <nav className="flex items-center">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                  currentPage === 1
                    ? "text-gray-300"
                    : "text-gray-700 bg-white hover:bg-gray-50"
                }`}
              >
                Previous
              </button>
              <button
                onClick={() =>
                  currentPage < totalPages && paginate(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                  currentPage === totalPages
                    ? "text-gray-300"
                    : "text-gray-700 bg-white hover:bg-gray-50"
                }`}
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 ${
                      currentPage === 1
                        ? "text-gray-300 bg-gray-50"
                        : "text-gray-500 bg-white hover:bg-gray-50"
                    }`}
                  >
                    &lt;
                  </button>

                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`relative inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium ${
                        currentPage === number
                          ? "bg-pink-500 text-white hover:bg-pink-600"
                          : "bg-white text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {number}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      currentPage < totalPages && paginate(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 ${
                      currentPage === totalPages
                        ? "text-gray-300 bg-gray-50"
                        : "text-gray-500 bg-white hover:bg-gray-50"
                    }`}
                  >
                    &gt;
                  </button>
                </nav>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingItem(null);
          }}
          title="Edit User Information"
        >
          <EditForm
            data={editingItem}
            onSave={handleSave}
            onCancel={() => {
              setIsModalOpen(false);
              setEditingItem(null);
            }}
          />
        </Modal>
      )}

      {/* Notification */}
      {notification.show && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />
      )}
    </div>
  );
};

export default DataTable;

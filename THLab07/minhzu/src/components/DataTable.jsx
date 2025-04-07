import React from "react";
import { FaEdit, FaFileImport, FaFileExport } from "react-icons/fa";

const DataTable = () => {
  const rows = [
    {
      id: 1,
      avatar: "👩",
      name: "Elizabeth Lee",
      company: "AvatarSystems",
      value: "$359",
      date: "10/07/2023",
      status: "New",
    },
    {
      id: 2,
      avatar: "👨",
      name: "Carlos Garcia",
      company: "SmoozShift",
      value: "$747",
      date: "24/07/2023",
      status: "New",
    },
    {
      id: 3,
      avatar: "👩",
      name: "Elizabeth Bailey",
      company: "Prime Time Telecom",
      value: "$564",
      date: "08/08/2023",
      status: "In-progress",
    },
    {
      id: 4,
      avatar: "👨",
      name: "Ryan Brown",
      company: "OmniTech Corporation",
      value: "$541",
      date: "31/08/2023",
      status: "In-progress",
    },
    {
      id: 5,
      avatar: "👨",
      name: "Ryan Young",
      company: "DataStream Inc.",
      value: "$769",
      date: "01/05/2023",
      status: "Completed",
    },
    {
      id: 6,
      avatar: "👩",
      name: "Hailey Adams",
      company: "FlowRush",
      value: "$922",
      date: "10/06/2023",
      status: "Completed",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="h-5 w-5 bg-pink-500 rounded mr-2"></div>
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
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="h-4 w-4 rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm mr-3">
                      {row.avatar}
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
                    ${
                      row.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : row.status === "In-progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="text-sm text-gray-500">63 results</div>
          <nav className="flex items-center">
            <div className="flex-1 flex justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    &lt;
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-pink-500 text-sm font-medium text-white hover:bg-pink-600"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    11
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    &gt;
                  </a>
                </nav>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

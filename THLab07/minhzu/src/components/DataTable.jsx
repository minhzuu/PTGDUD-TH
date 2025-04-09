import React from "react";
import { FaEdit } from "react-icons/fa";

const DataTable = () => {
  const rows = [
    {
      name: "Elizabeth Lee",
      company: "AvatarSystems",
      value: "$359",
      date: "10/07/2023",
      status: "New",
    },
    {
      name: "Carlos Garcia",
      company: "SmoozShift",
      value: "$747",
      date: "24/07/2023",
      status: "New",
    },
    {
      name: "Elizabeth Bailey",
      company: "Prime Time Telecom",
      value: "$564",
      date: "08/08/2023",
      status: "In-progress",
    },
    {
      name: "Ryan Brown",
      company: "OmniTech Corporation",
      value: "$541",
      date: "31/08/2023",
      status: "In-progress",
    },
    {
      name: "Ryan Young",
      company: "DataStream Inc.",
      value: "$769",
      date: "01/05/2023",
      status: "Completed",
    },
    {
      name: "Hailey Adams",
      company: "FlowRush",
      value: "$922",
      date: "10/06/2023",
      status: "Completed",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-50 text-emerald-600";
      case "In-progress":
        return "bg-amber-50 text-amber-600";
      case "New":
        return "bg-blue-50 text-blue-600";
      default:
        return "";
    }
  };

  return (
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
            <th className="p-4 text-xs font-semibold text-gray-500">COMPANY</th>
            <th className="p-4 text-xs font-semibold text-gray-500">
              ORDER VALUE
            </th>
            <th className="p-4 text-xs font-semibold text-gray-500">
              ORDER DATE
            </th>
            <th className="p-4 text-xs font-semibold text-gray-500">STATUS</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
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
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-medium">
                    {row.name.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-900 font-medium">
                    {row.name}
                  </span>
                </div>
              </td>
              <td className="p-4 text-sm text-gray-600">{row.company}</td>
              <td className="p-4 text-sm text-gray-900 font-medium">
                {row.value}
              </td>
              <td className="p-4 text-sm text-gray-600">{row.date}</td>
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
                <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center p-4 border-t border-gray-100">
        <div className="text-sm text-gray-500">63 results</div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded border border-rose-500 bg-rose-500 text-white text-sm">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 text-sm hover:border-rose-500 hover:text-rose-500 transition-colors">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 text-sm hover:border-rose-500 hover:text-rose-500 transition-colors">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 text-sm hover:border-rose-500 hover:text-rose-500 transition-colors">
            4
          </button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 text-sm hover:border-rose-500 hover:text-rose-500 transition-colors">
            10
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

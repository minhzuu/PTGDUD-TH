
import React from "react";
const DataTable = () => {
    const rows = [
      { name: "Elizabeth Lee", company: "AvatarSystems", value: "$359", date: "10/07/2023", status: "New" },
      { name: "Carlos Garcia", company: "SmoozShift", value: "$747", date: "24/07/2023", status: "New" },
      { name: "Elizabeth Bailey", company: "Prime Time Telecom", value: "$564", date: "08/08/2023", status: "In-progress" },
      { name: "Ryan Brown", company: "OmniTech Corporation", value: "$541", date: "31/08/2023", status: "In-progress" },
      { name: "Ryan Young", company: "DataStream Inc.", value: "$769", date: "01/05/2023", status: "Completed" },
      { name: "Hailey Adams", company: "FlowRush", value: "$922", date: "10/06/2023", status: "Completed" },
    ];
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-bold mb-4">Detailed report</h3>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Customer Name</th>
              <th className="p-2 border">Company</th>
              <th className="p-2 border">Order Value</th>
              <th className="p-2 border">Order Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="text-center border">
                <td className="p-2 border">{row.name}</td>
                <td className="p-2 border">{row.company}</td>
                <td className="p-2 border">{row.value}</td>
                <td className="p-2 border">{row.date}</td>
                <td className={`p-2 border ${row.status === "Completed" ? "text-green-600" : row.status === "In-progress" ? "text-yellow-600" : "text-blue-600"}`}>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default DataTable;
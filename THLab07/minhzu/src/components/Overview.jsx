import { FaShoppingCart, FaDollarSign, FaUsers } from "react-icons/fa";
import React from "react";

const Overview = () => {
    const data = [
      { title: "Turnover", value: "$92,405", change: "5.39%", icon: <FaShoppingCart />, color: "bg-pink-100" },
      { title: "Profit", value: "$32,218", change: "5.39%", icon: <FaDollarSign />, color: "bg-blue-100" },
      { title: "New customer", value: "298", change: "8.84%", icon: <FaUsers />, color: "bg-green-100" },
    ];
    return (
      <section className="p-4">
        <h2 className="text-xl font-bold mb-4">Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className={`${item.color} p-4 rounded-lg shadow-md flex items-center space-x-4`}>
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="text-lg font-semibold">{item.value}</p>
                <p className="text-sm text-green-600">▲ {item.change}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Overview;

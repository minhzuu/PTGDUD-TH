import React from "react";
import { FaShoppingCart, FaDollarSign, FaUserPlus } from "react-icons/fa";

const Overview = () => {
  const cards = [
    {
      title: "Turnover",
      value: "$92,405",
      change: "5.39%",
      period: "period of change",
      bgColor: "bg-red-50",
      textColor: "text-red-500",
      icon: <FaShoppingCart className="text-red-400" />,
      iconBg: "bg-white",
    },
    {
      title: "Profit",
      value: "$32,218",
      change: "5.39%",
      period: "period of change",
      bgColor: "bg-blue-50",
      textColor: "text-blue-500",
      icon: <FaDollarSign className="text-blue-400" />,
      iconBg: "bg-white",
    },
    {
      title: "New customer",
      value: "298",
      change: "8.84%",
      period: "period of change",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-500",
      icon: <FaUserPlus className="text-indigo-400" />,
      iconBg: "bg-white",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="h-5 w-5 bg-pink-500 rounded mr-2"></div>
        <h2 className="text-lg font-bold">Overview</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} rounded-lg p-5 relative`}
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-gray-500 text-sm font-medium mb-1">
                  {card.title}
                </h3>
                <p className="text-2xl font-bold mb-2">{card.value}</p>
                <p className="text-xs text-green-500 flex items-center">
                  <span className="mr-1">▲</span>
                  <span className="font-medium">{card.change}</span>
                  <span className="text-gray-500 ml-1">{card.period}</span>
                </p>
              </div>
              <div
                className={`${card.iconBg} h-10 w-10 rounded-lg flex items-center justify-center`}
              >
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;

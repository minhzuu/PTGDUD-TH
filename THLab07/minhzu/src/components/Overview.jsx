import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaDollarSign, FaUserPlus } from "react-icons/fa";

const Overview = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://67e2d23197fc65f53537ba62.mockapi.io/cards_overview"
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

  // Card styling configurations
  const cardStyles = [
    {
      bgColor: "bg-red-50",
      textColor: "text-red-500",
      icon: <FaShoppingCart className="text-red-400" />,
      iconBg: "bg-white",
    },
    {
      bgColor: "bg-blue-50",
      textColor: "text-blue-500",
      icon: <FaDollarSign className="text-blue-400" />,
      iconBg: "bg-white",
    },
    {
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-500",
      icon: <FaUserPlus className="text-indigo-400" />,
      iconBg: "bg-white",
    },
  ];

  if (loading)
    return (
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="h-5 w-5 bg-pink-500 rounded mr-2"></div>
          <h2 className="text-lg font-bold">Overview</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-5 animate-pulse h-32"
            ></div>
          ))}
        </div>
      </div>
    );

  if (error)
    return (
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="h-5 w-5 bg-pink-500 rounded mr-2"></div>
          <h2 className="text-lg font-bold">Overview</h2>
        </div>
        <div className="p-4 bg-red-100 text-red-600 rounded-lg">
          Error loading data: {error}
        </div>
      </div>
    );

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="h-5 w-5 bg-pink-500 rounded mr-2"></div>
        <h2 className="text-lg font-bold">Overview</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {apiData.map((card, index) => {
          const style = cardStyles[index % cardStyles.length];
          return (
            <div
              key={card.id}
              className={`${style.bgColor} rounded-lg p-5 relative`}
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
                  className={`${style.iconBg} h-10 w-10 rounded-lg flex items-center justify-center`}
                >
                  {style.icon}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;

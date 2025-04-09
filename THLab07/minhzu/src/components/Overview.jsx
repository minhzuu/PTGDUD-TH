import { FaShoppingCart, FaDollarSign, FaUsers } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Overview = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map of icons based on card titles
  const getIcon = (title) => {
    switch (title) {
      case "Turnover":
        return <FaShoppingCart />;
      case "Profit":
        return <FaDollarSign />;
      case "New customer":
        return <FaUsers />;
      default:
        return <FaShoppingCart />;
    }
  };

  // Get background and icon colors based on card titles
  const getStyles = (title) => {
    switch (title) {
      case "Turnover":
        return {
          bgColor: "bg-pink-100/90",
          iconBg: "bg-white",
          iconColor: "text-rose-500",
          changeColor: "text-rose-500",
        };
      case "Profit":
        return {
          bgColor: "bg-blue-100/90",
          iconBg: "bg-white",
          iconColor: "text-blue-500",
          changeColor: "text-blue-500",
        };
      case "New customer":
        return {
          bgColor: "bg-sky-100/90",
          iconBg: "bg-white",
          iconColor: "text-sky-500",
          changeColor: "text-sky-500",
        };
      default:
        return {
          bgColor: "bg-gray-100/90",
          iconBg: "bg-white",
          iconColor: "text-gray-500",
          changeColor: "text-gray-500",
        };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://67e2d23197fc65f53537ba62.mockapi.io/cards_overview"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCards(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching overview data:", err);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-100 animate-pulse rounded-xl p-6 h-[120px]"
          ></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 rounded-lg bg-red-50 mb-8">
        Error loading overview data: {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {cards.map((card) => {
        const styles = getStyles(card.title);
        return (
          <div
            key={card.id}
            className={`${styles.bgColor} rounded-xl p-6 relative overflow-hidden shadow-sm`}
          >
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <div
                className={`${styles.iconBg} w-8 h-8 rounded-lg flex items-center justify-center ${styles.iconColor} text-lg`}
              >
                {getIcon(card.title)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm text-gray-600 font-medium">
                {card.title}
              </h3>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-semibold text-gray-900">
                  {card.value}
                </p>
                <div className="flex items-center gap-1">
                  <span className={`text-xs ${styles.changeColor}`}>▲</span>
                  <span className={`text-sm ${styles.changeColor}`}>
                    +{card.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-1">
                    {card.period}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;

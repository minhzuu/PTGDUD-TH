import React, { useEffect } from "react";
import { FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa";

const Notification = ({
  message,
  type = "success",
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const bgColor =
    type === "success"
      ? "bg-green-50 border-green-400"
      : "bg-red-50 border-red-400";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const icon =
    type === "success" ? (
      <FaCheckCircle className="text-green-400" />
    ) : (
      <FaTimesCircle className="text-red-400" />
    );

  return (
    <div
      className={`fixed bottom-4 right-4 animate-slide-in-right max-w-sm border-l-4 ${bgColor} p-4 rounded-md shadow-lg`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-0.5">{icon}</div>
        <div className="ml-3 flex-1">
          <p className={`text-sm font-medium ${textColor}`}>{message}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={onClose}
            className={`inline-flex ${textColor} focus:outline-none focus:text-gray-500`}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;

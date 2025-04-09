import React, { useState, useEffect } from "react";

const EditForm = ({ data, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(
    data || {
      name: "",
      company: "",
      value: "",
      date: "",
      status: "",
    }
  );

  // Determine if we're adding a new user or editing an existing one
  const isAddMode = !data?.id;

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="edit-form" onSubmit={handleSubmit}>
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500"
            placeholder="Tech Corp"
            required
          />
        </div>

        <div>
          <label
            htmlFor="value"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Order Value
          </label>
          <input
            type="text"
            id="value"
            name="value"
            value={formData.value}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500"
            placeholder="$1000"
            required
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Order Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500"
            required
          >
            <option value="">Select a status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Completed">Completed</option>
            <option value="In-progress">In Progress</option>
            <option value="New">New</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 bg-rose-500 border border-transparent rounded-md text-sm font-medium text-white hover:bg-rose-600 transition-colors"
        >
          {isAddMode ? "Add Customer" : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default EditForm;

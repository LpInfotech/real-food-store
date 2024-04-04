const Filter = () => {
  return (
    <>
      {/* filter by category */}
      <div className="w-full py-4 border-b">
        <h2 className="text-md font-semibold mb-4">Filter by Category</h2>
        <ul className="space-y-2">
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Category 1</span>
            </label>
          </li>
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Category 2</span>
            </label>
          </li>
        </ul>
      </div>

      {/* filter by price */}
      <div className="w-full py-4 border-b">
        <h2 className="text-md font-semibold mb-4">Filter by Price</h2>
        <div>
          <input type="range" min="0" max="100" step="1" className="w-full" />
        </div>
      </div>

      {/* filter by brand */}
      <div className="w-full py-4 border-b">
        <h2 className="text-md font-semibold mb-4">Filter by Brand</h2>
        <ul className="space-y-2">
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Brand 1</span>
            </label>
          </li>
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Brand 2</span>
            </label>
          </li>
        </ul>
      </div>

      {/* filter by rating */}
      <div className="w-full py-4 border-b">
        <h2 className="text-md font-semibold mb-4">Filter by Rating</h2>
        <ul className="space-y-2">
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">⭐️⭐️⭐️⭐️⭐️</span>
            </label>
          </li>
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">⭐️⭐️⭐️⭐️</span>
            </label>
          </li>
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">⭐️⭐️⭐️</span>
            </label>
          </li>
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">⭐️⭐️</span>
            </label>
          </li>
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">⭐️</span>
            </label>
          </li>
        </ul>
      </div>

      {/* filter by size */}
      <div className="w-full py-4 border-b">
        <h2 className="text-md font-semibold mb-4">Filter by Size</h2>
        <ul className="space-y-2">
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Small</span>
            </label>
          </li>
          <li>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Medium</span>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Filter;

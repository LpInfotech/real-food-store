import { useEffect, useState } from "react";

const Filter = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoryList(data);
      });
  }, []);
  // // rating stars
  // let rating = 5;
  // for (let i = rating; i >= 1; i--) {
  //   let str = "⭐️";
  //   console.log(str.repeat(i));
  //   rating.(str.repeat(i));
  // }

  return (
    <>
      {/* filter by category */}
      <div className="w-full py-4 border-b">
        <h3 className="text-md font-semibold mb-4">Filter by Category</h3>
        <ul className="space-y-2">
          {categoryList &&
            categoryList.map((item) => (
              <li key={item.id}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2">{item.category}</span>
                </label>
              </li>
            ))}
        </ul>
      </div>

      {/* filter by price */}
      <div className="w-full py-4 border-b">
        <h3 className="text-md font-semibold mb-4">Filter by Price</h3>
        <div>
          <input type="range" min="0" max="100" step="1" className="w-full" />
        </div>
      </div>

      {/* filter by brand */}
      <div className="w-full py-4 border-b">
        <h3 className="text-md font-semibold mb-4">Filter by Brand</h3>
        <ul className="space-y-2">
          {categoryList &&
            categoryList.map((item) => (
              <li key={item.id}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2">{item.brand}</span>
                </label>
              </li>
            ))}
        </ul>
      </div>

      {/* filter by rating */}
      <div className="w-full py-4 border-b">
        <h3 className="text-md font-semibold mb-4">Filter by Rating</h3>
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
          {/* <li>
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
          </li> */}
        </ul>
      </div>

      {/* filter by size */}
      <div className="w-full py-4">
        <h3 className="text-md font-semibold mb-4">Filter by Size</h3>
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

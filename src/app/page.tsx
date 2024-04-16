"use client";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Page from "./products/(overview)/page";
import React, { useEffect, useState } from "react";

export default function Home({ filteredData, searchData }) {
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const [data, setData] = useState([]);
  const [dataFromChild, setDataFromChild] = useState(null);
  const [newData, setNewData] = useState(data);
  searchData = dataFromChild;

  // get search data from child
  function handleDataFromChild(childData) {
    setDataFromChild(childData);
    filterData(childData);
  }

  // filter data for search
  const filterData = (childData) => {
    setNewData(
      data.filter((item) => item.productName.toLowerCase().includes(childData))
    );
  };

  // pass filtered data to the PAGE component
  filteredData = newData;

  return (
    <main className="flex flex-col h-full">
      <Navbar sendDataToParent={handleDataFromChild} isSearch={true} />
      <div className="container mx-auto">
        <Page filterData={filteredData} searchItem={searchData} />{" "}
      </div>
      <Footer />
    </main>
  );
}

"use client";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Page from "./products/(overview)/page";
import React, { useState } from "react";
import data from "./api/data.json";

export default function Home({ filteredData, searchItem }) {
  const [dataFromChild, setDataFromChild] = useState("");
  const [newData, setNewData] = useState(data);
  searchItem = dataFromChild;
  // get search data from child
  function handleDataFromChild(data) {
    setDataFromChild(data);
    filterData(dataFromChild);
  }

  // filter data for search
  const filterData = (childData) => {
    setNewData(
      data.filter((item) => item.productName.toLowerCase().includes(childData))
    );
  };

  // pass filtere data to the PAGE component
  filteredData = newData;

  return (
    <main className="flex flex-col h-full">
      <Navbar sendDataToParent={handleDataFromChild} isSearch={true} />
      <div className="container mx-auto p-10">
        <Page filterData={filteredData} searchItem={searchItem} />
      </div>
      <Footer />
    </main>
  );
}

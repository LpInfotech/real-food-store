"use client";
import React, { useContext, useState } from "react";
import Navbar from "../ui/Navbar";
import Page from "./(overview)/page";
import Footer from "../ui/Footer";
import { ProductsContext } from "../context/GetProducts";

export default function Products({ filteredData, searchData }) {
  const [productList] = useContext(ProductsContext);
  const [dataFromChild, setDataFromChild] = useState(null);
  const [newData, setNewData] = useState(productList.productList);
  searchData = dataFromChild;

  // get search data from child
  function handleDataFromChild(childData) {
    setDataFromChild(childData);
    filterData(childData);
  }

  // filter data for search
  const filterData = (childData) => {
    setNewData(
      productList.productList.filter((item) =>
        item.productName.toLowerCase().includes(childData)
      )
    );
  };

  // pass filtered data to the page component
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

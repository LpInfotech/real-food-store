"use client";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Page from "./products/(overview)/page";
import React, { useState } from "react";
import data from "./api/data.json";
import { CartProvider } from "./context/cartContext";

interface IFilteredData {
  id: number;
  productImage: string;
  productDescription: string;
  productName: string;
  isDiscount: boolean;
  originalPrice: number;
  sellingPrice: number;
  category: string;
  brand: string;
  stock: number;
  availability: boolean;
}

export default function Home({ filteredData, searchItem }) {
  const [dataFromChild, setDataFromChild] = useState("");
  const [newData, setNewData] = useState(data);
  searchItem = dataFromChild;

  // get search data from child
  function handleDataFromChild(data) {
    setDataFromChild(data);
    filterData(data);
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
        <Page filterData={filteredData} searchItem={searchItem} />{" "}
      </div>
      <Footer />
    </main>
  );
}

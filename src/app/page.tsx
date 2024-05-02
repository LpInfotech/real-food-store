"use client";
import React, { useEffect, useState } from "react";
import Login from "./login/page";

export default function Home({ filteredData, searchData }) {

  return (
    <main className="flex flex-col h-full">
      <Login />
      {/* <Navbar sendDataToParent={handleDataFromChild} isSearch={true} />
      <div className="container mx-auto">
        <Page filterData={filteredData} searchItem={searchData} />{" "}
      </div>
      <Footer /> */}
    </main>
  );
}

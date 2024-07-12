import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <div className="">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

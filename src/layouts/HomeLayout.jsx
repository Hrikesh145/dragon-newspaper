import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";

const HomeLayout = () => {

  
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto">
            <Navbar></Navbar>
        </nav>
      </header>
      <main className="mx-auto w-11/12 my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;

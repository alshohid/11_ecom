
"use client"
import Banner from "@/components/banner/Banner";
import HeroComponent from "@/components/Hero/HeroComponent";
import Navbar from "@/components/navbar/Navbar";
import Product from "@/components/products/Product";
import Subscribe from "@/components/subscribe/Subscribe";
import TopProduct from "@/components/topProduct/TopProduct";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar/>
      <HeroComponent/>
      <Product/>
      <TopProduct/>
      <Banner/>
      <Subscribe/>
    </div>
  )
}

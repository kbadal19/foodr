import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/card";
import Carousel from "../components/carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

import { tours } from "../data";
import Title from "./Title";
import React from "react";
import Tour from "./Tour.jsx";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((links) => {
          return <Tour key={links.id} {...links} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

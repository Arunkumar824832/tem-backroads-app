import React from "react";
import Title from "./Title";
import { services } from "../data";
import Service from "./Service.jsx";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((links) => {
          return <Service key={links.id} {...links} />;
        })}
      </div>
    </section>
  );
};

export default Services;

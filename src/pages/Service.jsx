import React from "react";
import Header from "../Components/Header";

import ServiceCard from "../Components/Service/ServiceCard";
import ServiceCardLast from "../Components/Service/ServiceCardLast";

const Service = () => {
  return (
    <>
      <Header title={"Service"} />

      <ServiceCard />
      <ServiceCardLast />
    </>
  );
};

export default Service;

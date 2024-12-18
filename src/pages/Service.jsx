import React from 'react'
import Header from '../Components/Header'
import ServiceSection from '../Components/Service/ServiceSection'
import ServiceCard from '../Components/Service/ServiceCard'
import ServiceCardLast from '../Components/Service/ServiceCardLast'

const Service = () => {
  return (
    <>
      <Header title={"Service"}/>
      <ServiceSection/>
      <ServiceCard />
      <ServiceCardLast/>
    </>
  )
}

export default Service
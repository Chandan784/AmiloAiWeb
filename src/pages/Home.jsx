import React from 'react'
import ServicesThreeCard from '../Components/home/ServicesThreeCard'
import WhoAreYou from '../Components/home/WhoAreYou'
import HomeHeader from '../Components/HomeHeader'
import Ser

const Home = () => {
  return (
    <>
      <HomeHeader />
      <WhoAreYou />
      <ServiceSection />
      <ServicesThreeCard />
      {/* <HomeHighlight/> */}
      {/* <Footer /> */}
    </>
  )
}

export default Home
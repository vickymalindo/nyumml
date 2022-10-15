import React from 'react'
import Bottom from '../utilities/Bottom'
import Catalogue from './Catalogue'
import Jumbotron from './Jumbotron'
import Nav from '../utilities/Nav'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <Catalogue />
      <Review />
      <Bottom />
    </div>
  )
}

export default Home
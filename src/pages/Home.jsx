import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'

function Home() {
  return (
    <>
    <Navbar/>
    <CategoryMenu/>
    <FoodItems/>
    </>
  )
}

export default Home
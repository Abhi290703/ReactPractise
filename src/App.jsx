import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Team from './component/Teams';
import Project from './component/Project';
import TeamMemberDetail from './component/TeamMemberDetails';
import ProductList from './product/Productlist';
import ProductDetails from './product/Productdetails';
import Calender from './component/calender';


function Dashboard() {
  return (
    <h1 className="text-center mt-10 text-2xl font-bold">
      Dashboard Page
    </h1>
  );
}
export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/Team/:id" element={<TeamMemberDetail />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/calender' element={<Calender/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
    </>
  )
}

// 
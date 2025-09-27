import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './Footer'
import Cards from './components/Cards'

const fetchIssues = async() => {
  const result = await fetch('/data.json')
 return result.json();
};

function App() {

  const fetchPromise = fetchIssues();


  return (
    <>
     
      <Navbar></Navbar>
      <Banner></Banner>

    <Suspense fallback={<p>Loading...</p>}>
      <Cards fetchPromise={fetchPromise}></Cards>
    </Suspense>

      <Footer></Footer>
     
      
    </>
  )
}

export default App

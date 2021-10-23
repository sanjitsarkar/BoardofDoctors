import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import FilterSection from './components/FilterSection'
import Container from './components/Container'

function App() {

  return (
    <div className="App bg-gray-200 h-screen">
      <Header/>
      <FilterSection/>
      <Container/>
    </div>
  )
}

export default App

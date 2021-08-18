import React, { useState } from 'react'

import './App.css'

import Container from 'react-bootstrap/Container'

import HeroesFilter from './pages/FilterPage/Filter'
import FilterResult from './pages/FilterResult/FilterResult'
import NavBar from './pages/NavBar/NavBar'

function App() {
  const [searchText, setSearchText] = useState('')

  const [superheroData, setSuperheroData] = useState([])

  async function searchSuperHeroes() {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/4491688614216084/search/${searchText}`
    )
    if (response.status == 200) {
      const data = await response.json()
      setSuperheroData(data.results)
    }
    console.log(response.status)
  }

  const handleChange = (e) => {
    e.preventDefault()

    const searchTerm = e.target.value

    setSearchText(searchTerm)

    if (searchTerm.length === 0) {
      setSuperheroData([])
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes()
    }
  }

  return (
    <Container>
      <NavBar />
      <HeroesFilter searchText={searchText} handleChange={handleChange} />
      <FilterResult superheroData={superheroData} />
    </Container>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import './App.css';
import Section from "./components/Section"

function App() {
  const [genres, setGenres] = useState(null)

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getGenres")
    const responseBody = await response.json()
    setGenres(responseBody.data.reference_list.values)
  }

useEffect(() => {
  fetchData()
}, [])

  return (
<>
    {genres && (Object.values(genres).map((genre) => (<Section genre={genre.value} />)))}

   </>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import Card from "./Card"

const Section = ({ genre }) => {
    const[movies, setMovies] = useState(null)


    const fetchData = async () => {
        const response = await fetch("/.netlify/functions/getMovies", {
            method: "POST",
            body: JSON.stringify( { genre: genre })
        })
        const responseBody = await response.json()
        setMovies(responseBody.data.movies_by_genre.values)
      }
    
    useEffect(() => {
      fetchData()
    }, [])


    return (
        <>
        <div> {genre}</div>
        {movies && (
            <div className="movie-section">
                {movies.map((movie, index) => (
                    <Card key={index} movie={movie} />
                ))}
            </div>
        )}
        </>
    )
    
}

export default Section
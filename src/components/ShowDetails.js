import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// this comp will show details about the shows, link will go from showList comp
export const ShowDetails = () => {
  const { showID } = useParams();
  const [show, setShow] = useState([]);

  console.log(show)

  useEffect(() => {
    fetch(`https://dls-shows-api.herokuapp.com/shows/id/${showID}`)
      .then((res) => res.json())
      .then((json) => {
        setShow(json)
      })
      .catch(() => {
        console.error()
      })
  }, [showID])

  console.log(show)

  return (
    <div>
      <h1>hej från show details</h1>
    </div>
  )
}
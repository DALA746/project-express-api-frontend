import React from 'react'

export const App = () => {
  fetch('https://dls-shows-api.herokuapp.com/shows')
    .then((res) => res.json())
    .then((json) => console.log(json.response))

  return (
    <div>
      Find me in src/app.js!
    </div>
  )
}
